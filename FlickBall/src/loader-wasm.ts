import { LoaderResponse } from "./loader-fetch";
import LoaderRequest from "./loader-request";

export interface InstaniatedModule {
    wasmModule: WebAssembly.Module;
    instance: WebAssembly.Instance;
    compileTime: number;
    instantiateTime: number;
}

function wasmInstantiateFromArray(wasmData: ArrayBuffer,
    info: Record<string, Record<string, WebAssembly.ImportValue>>): Promise<InstaniatedModule> {
    LoaderRequest.log("Instaniate WASM from buffer");
    const compileStartedAt = Date.now();
    return WebAssembly.compile(wasmData)
        .then((wasmModule) => {
            const compileTime = Date.now() - compileStartedAt;
            const instantiateStartedAt = Date.now();
            return WebAssembly.instantiate(wasmModule, info)
                .then((instance) => {
                    return {
                        wasmModule,
                        instance,
                        compileTime,
                        instantiateTime: Date.now() - instantiateStartedAt,
                    };
                });
        });
}

function wasmInstantiateFromResponse(response: LoaderResponse,
    info: Record<string, Record<string, WebAssembly.ImportValue>>): Promise<InstaniatedModule> {
    const wasmResponse = response.response;
    const contentType = wasmResponse.headers.get("content-type") || "";
    if (contentType.indexOf("application/wasm") === -1) {
        LoaderRequest.log("ERR! Can't instantiate wasm from stream mode, cause content type is wrong: " +
                            contentType);
        return wasmResponse.arrayBuffer().then((arrayBuffer) => {
            response.release();
            return wasmInstantiateFromArray(arrayBuffer, info);
        });
    }

    LoaderRequest.log("Instantiate WASM from stream");
    const instantiateStartedAt = Date.now();
    return WebAssembly.instantiateStreaming(wasmResponse, info)
        .then((source) => {
            response.release();
            return {
                wasmModule: source.module,
                instance: source.instance,
                compileTime: 0,
                instantiateTime: Date.now() - instantiateStartedAt,
            };
        });
}

export default function wasmInstantiate(source: LoaderResponse | ArrayBuffer,
    info: Record<string, Record<string, WebAssembly.ImportValue>>): Promise<InstaniatedModule> {
    if (source instanceof LoaderResponse) {
        return wasmInstantiateFromResponse(source as LoaderResponse, info);
    } else {
        return wasmInstantiateFromArray(source as ArrayBuffer, info);
    }
}
