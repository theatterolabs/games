// libgamepix
// ==========
// This is noop replacment for virtualenv/libgamepix
// I decided to use it, because for now workers implementation
// does not have any advantages but cumbersome

export default class LibGamepix {
    public mode = "no-op";
    private module: any;

    constructor(module: any, callback: () => void) {
        this.module = module;
        callback();
    }

    public ptrToBuffer(ptr: number, length: number) {
        return new Int8Array(this.module.HEAP8.subarray(ptr, ptr + length));
    }

    public bufferToPtr(buffer: ArrayLike<number>, ptr: number) {
        if (buffer.constructor === Int8Array) {
            this.module.HEAP8.set(buffer, ptr);
        } else {
            this.module.HEAP8.set(new Int8Array(buffer), ptr);
        }
    }

    public queueSize() {
        return 0;
    }

    public squeeze() {
        // do nothing
    }
}
