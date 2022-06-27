// Brotli
// ======
// Wrapper around BrotliDecode to catch brotliTime

export default class Brotli {
    public static brotliTime = 0;
    public static decode(int8Array: Int8Array) {
        const startedAt = Date.now();
        const decoded = (window as any).BrotliDecode(int8Array);
        Brotli.brotliTime += Date.now() - startedAt;
        return decoded;
    }
}
