import {WRLMemory} from "./wrl-memory";
import { WRLMeta, Signature} from "./wrl-meta";

import { InternalModule } from "../loader";

declare let WM: any;
declare let WE: any;
declare let FUNCTION_TABLE: any;
declare let i64toi32_i32$HIGH_BITS: any;

export default class WRL {
    public meta: WRLMeta;
    public $f: any;

    public $m = new WRLMemory();

    public trampolineBaseName = "$t_";
    public trampolineFunctions: {[signature: string]: (wtIndex: number) => void } = {};

    public cachedFunctions: {[jsName: string]: () => any } = {};
    public cachedOffset: {[index: string]: number } = {};

    private readyResolve: () => void;
    private readyReject: (err: any) => void;
    public ready: Promise<void> = new Promise<void>((resolve, reject) => {
        this.readyResolve = resolve;
        this.readyReject = reject;
    });

    private metaLoadPromise: Promise<void>;
    private loadBufferCalled = false;

    private module: InternalModule;
    private buffer?: ArrayBuffer;
    private binaryFunctions?: {
        count: number;
        model: number;
        offsets: Int32Array;
        buffer: ArrayBuffer;
    };
    private fzipLock = false;

    public loadMeta(module: InternalModule) {
        this.module = module;
        this.module.log("WRL loading meta...");
        this.metaLoadPromise = this.module.loadResource("wrl.js", "wrl.js")
            .then((script: any) => {
                eval.call(null, script);
            });
    }

    public loadBufferNow() {
        this.loadBuffer(false);
    }

    public loadBufferOnIdle() {
        this.loadBuffer(true);
    }

    private loadBuffer(waitForIdle: boolean) {
        if (this.loadBufferCalled) {
            return;
        }

        this.loadBufferCalled = true;
        this.metaLoadPromise
            .then(() => {
                const loadFn = () => {
                    this.module.log("WRL loading buffer");
                    this.module.loadResource("wrl.bin._.js", "wrl.bin._.js", "arraybuffer")
                        .then((buffer) => {
                            this.buffer = buffer;
                            this.readyResolve();
                        })
                        .catch(this.readyReject);
                };

                if (waitForIdle) {
                    this.module.log("WRL load buffer requested");
                    const intervalId = setInterval(() => {
                        if (this.module.idle()) {
                            clearInterval(intervalId);
                            loadFn();
                        }
                    }, 500);
                } else {
                    loadFn();
                }
            })
            .catch(this.readyReject);
    }

    private initDecoder(buffer: ArrayBuffer) {
        const count = new Int32Array(buffer, 0, 1)[0];
        const offsets = new Int32Array(buffer, 4, count);

        const modelOffset = offsets[count - 1];
        const modelBuffer = new Int8Array(buffer,
                                           modelOffset,
                                           buffer.byteLength - modelOffset);

        const embuffer = wrl.module._malloc(modelBuffer.byteLength);
        wrl.module.HEAP8.set(modelBuffer, embuffer);
        const model = (wrl.module as any)._fzip_init(embuffer, modelBuffer.byteLength);
        wrl.module._free(embuffer);

        wrl.binaryFunctions = {
            count,
            model,
            offsets,
            buffer,
        };
    }

    private unpack(index: number) {
        if (wrl.fzipLock) {
            throw new Error("Decoder init recursion [" + index + "]");
        }
        wrl.fzipLock = true;
        if (!wrl.binaryFunctions) {
            wrl.initDecoder(wrl.buffer);
            wrl.fzipLock = false;
        }

        const start = wrl.binaryFunctions.offsets[index];
        const end = wrl.binaryFunctions.offsets[index + 1];
        const data = new Int8Array(wrl.binaryFunctions.buffer, start, end - start);

        let fnbody = "";
        (wrl.module as any).fzip_decompressed = (decompressed: string) => {
            fnbody = decompressed;
        };
        const embuffer = wrl.module._malloc(data.byteLength);
        wrl.module.HEAP8.set(data, embuffer);
        (wrl.module as any)._fzip_decompress(wrl.binaryFunctions.model, embuffer, data.byteLength);
        wrl.module._free(embuffer);
        this.fzipLock = false;
        return fnbody;
    }

    public $i(...params: any) {
        const wtIndex = params[params.length - 1];
        const index = wrl.meta.functionTable[wtIndex];
        if (index === undefined) {
            throw new Error("Function with wasm table index: " + wtIndex + " not found in meta");
        }
        params[params.length - 1] = index;
        return wrl.$t(...params);
    }

    public $t(...params: any) {
        const indexedName = params[params.length - 1];
        const signatureIndex = wrl.meta.indexedFunctions[indexedName * 2];
        const wtIndex = wrl.meta.indexedFunctions[indexedName * 2 + 1];
        if (signatureIndex === undefined || wtIndex === undefined) {
            throw new Error("Trampoline function " + indexedName + " not found in meta");
        }

        const signature = wrl.meta.signatures[signatureIndex];
        const ptr = wrl.$m.getPointer();

        const offset = wrl.$m.setValues(params, signature, ptr);

        wrl.$m.setPointer(ptr + offset);

        const trampolineFnName = wrl.trampolineBaseName + signature;
        if (wrl.trampolineFunctions[trampolineFnName] === undefined) {
            wrl.trampolineFunctions[trampolineFnName] = WE[trampolineFnName];
            if (wrl.trampolineFunctions[trampolineFnName] === undefined) {
                throw new Error("Trampoline function: " + trampolineFnName + " not found");
            }
        }
        wrl.trampolineFunctions[trampolineFnName](wtIndex);

        let result;
        if (signature[0] !== "v") {
            result = wrl.$m.getValue(signature[0], ptr + offset);
        }
        wrl.$m.setPointer(ptr);
        return result;
    }

    public $r(ptr: number, jsName: string) {
        const indexedName = Number.parseInt(jsName, 10);
        const signatureIndex = wrl.meta.indexedFunctions[indexedName * 2];
        if (signatureIndex === undefined) {
            throw new Error("Replace function " + indexedName + " not found in meta");
        } else {
            wrl.module.runtime.wipedcall(indexedName);
        }

        let result;
        const signature: string = wrl.meta.signatures[signatureIndex];
        if (wrl.buffer !== undefined) {
            if (wrl.cachedFunctions[jsName] === undefined) {
                // tslint:disable-next-line:no-eval
                wrl.cachedFunctions[jsName] = eval(wrl.unpack(indexedName));
            }

            const params = wrl.$m.getValues(signature, ptr);
            result = wrl.cachedFunctions[jsName].apply(null, params);
        } else {
            result = 0;
            i64toi32_i32$HIGH_BITS = 0;
        }

        if (signature[0] !== "v") {
            if (wrl.cachedOffset[jsName] === undefined) {
                wrl.cachedOffset[jsName] = 0;
                for (let i = 1; i < signature.length; i++) {
                    wrl.cachedOffset[jsName] += wrl.$m.types[signature.charAt(i)].size;
                }
            }
            wrl.$m.setValue(result, signature[0], ptr + wrl.cachedOffset[jsName]);
        }
    }

    public init(info: any, wasmTableSize: string) {
        const tableOffset = info.env.tableBase !== undefined ? info.env.tableBase : 1;
        const offsetWasmTableSize = Number.parseInt(wasmTableSize, 10) + tableOffset;
        info.env.table = new WebAssembly.Table({ initial: offsetWasmTableSize, maximum: offsetWasmTableSize, element: "anyfunc" });
        FUNCTION_TABLE = info.env.table;
        info.env.$r = this.$r;
    }

    public bind(wm: any, we: any) {
        WM = wm;
        WE = we;
        WM.$r = this.$r;
        WM.$t = this.$t;
        WM.$i = this.$i;

        WM.HEAP64_4 = new DataView(WM.HEAPF64.buffer, 4);

        const fnPrefix = "$t_wra_";
        if (this.$m.getPointer === undefined) {
            this.$m.getPointer = we[fnPrefix + "get"];
        }
        if (this.$m.setPointer === undefined) {
            this.$m.setPointer = we[fnPrefix + "set"];
        }
        WE.$t_wra_init();
    }

}

export const wrl = new WRL();
