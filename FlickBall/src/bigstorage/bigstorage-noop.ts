import { BigStorage } from "./bigstorage";

export default class BigStorageNoop implements BigStorage {
    public put(key: string, data: any, onflush: () => void) {
        // nothing
    }

    public get(key: string, ondata: (data: any) => void, onerror: (msg: string) => void) {
        onerror("BigStorage is not supported on this host");
    }

    public forEach(each: (key: string, value: any) => void, onend: () => void) {
        onend();
    }
}
