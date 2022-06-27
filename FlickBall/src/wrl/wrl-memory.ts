declare let WM: any;
declare let i64toi32_i32$HIGH_BITS: any;
declare let wrl: any;

export class WRLMemory {

    public setPointer?: (ptr: number) => void;
    public getPointer?: () => number;

    public types: {[type: string]: any} = {
        i: {size: 4 },
        j: {size: 8 },
        f: {size: 4 },
        d: {size: 8 },
        v: {},
    };

    private readValueFromMemory: {[typeCode: string]: (heapOffset: number) => number} = {
        i(heapOffset: number): number {
            return WM.HEAP32[heapOffset / 4];
        },
        j(heapOffset: number): number {
            const base = heapOffset / 4;
            const result = WM.HEAP32[base];
            i64toi32_i32$HIGH_BITS = WM.HEAP32[base + 1];
            return result;
        },
        f(heapOffset: number): number {
            return WM.HEAPF32[heapOffset / 4];
        },
        d(heapOffset: number): number {
            if (heapOffset % 8 === 0) {
                return WM.HEAPF64[heapOffset / 8];
            }
            return WM.HEAP64_4.getFloat64(heapOffset / 8);
        },
    };

    private writeValueToMemory: {[typeCode: string]: (value: number, heapOffset: number) => void } = {
        i(value: number, heapOffset: number) {
            WM.HEAP32[heapOffset / 4] = value;
        },
        j(value: number, heapOffset: number) {
            const base = heapOffset / 4;
            WM.HEAP32[base] = value;
            WM.HEAP32[base + 1] = i64toi32_i32$HIGH_BITS;
        },
        f(value: number, heapOffset: number) {
            WM.HEAPF32[heapOffset / 4] = value;
        },
        d(value: number, heapOffset: number) {
            if (heapOffset % 8 === 0) {
                WM.HEAPF64[heapOffset / 8] = value;
            } else {
                WM.HEAP64_4.setFloat64(heapOffset / 8, value);
            }
        },
    };

    public getValue(type: string, ptr: number): number {
        const memoryReader = wrl.$m.readValueFromMemory[type];
        if (memoryReader === undefined) {
            throw new Error("Unsupported type: " + type);
        }
        return memoryReader(ptr);
    }

    public getValues(signature: string, ptr: number): number[] {
        const values: number[] = [];
        let offset = 0;
        for (let i = 1; i < signature.length; i++) {
            const type = signature[i];
            const memoryReader = wrl.$m.readValueFromMemory[type];
            if (memoryReader === undefined) {
                throw new Error("Unsupported type: " + type);
            }
            const value = memoryReader(ptr + offset);
            values.push(value);
            if (type === "j") {
                values.push(i64toi32_i32$HIGH_BITS);
            }
            offset +=  wrl.$m.types[type].size;
        }
        return values;
    }

    public setValue(value: number, type: string, ptr: number) {
        const memoryWriter =  wrl.$m.writeValueToMemory[type];
        if (memoryWriter === undefined) {
            throw new Error("Unsupported type: " + type);
        }
        memoryWriter(value, ptr);
    }

    public setValues(values: number[], signature: string, ptr: number): number {
        let offset = 0;
        let index = 0;
        for (let i = 1; i < signature.length; i++) {
            const type = signature[i];
            const memoryWriter =  wrl.$m.writeValueToMemory[type];
            if (memoryWriter === undefined) {
                throw new Error("Unsupported type: " + type);
            }
            const value = values[index];
            if (type === "j") {
                index++;
                i64toi32_i32$HIGH_BITS = values[index];
            }
            memoryWriter(value, ptr + offset);
            offset +=  wrl.$m.types[type].size;
            index++;
        }
        return offset;
    }
}
