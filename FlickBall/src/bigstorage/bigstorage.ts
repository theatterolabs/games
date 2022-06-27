import BigStorageDb from "./bigstorage-db";
import BigStorageNoop from "./bigstorage-noop";

export interface BigStorage {
    put: (key: string, data: any, onflush: () => void) => void;
    get: (key: string, ondata: (data: any) => void, onerror: (msg: string) => void) => void;
    forEach: (each: (key: string, value: any) => void, onend: () => void) => void;
}

export default function BigStorage(module: any, onready: (bs: BigStorage) => void) {
    new BigStorageDb(module, onready, (msg: string) => {
        module.log("ERR! Can't initalize BigStorageDb, cause: " + msg);
        onready(new BigStorageNoop());
    });
}
