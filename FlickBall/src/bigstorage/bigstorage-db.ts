import { BigStorage } from "./bigstorage";

export default class BigStorageDb implements BigStorage {

    public version: string;

    private module: any;
    private storeName: string = "files";
    private indexedDB: IDBFactory;
    private db: IDBDatabase;

    constructor(module: any, onready: (bs: BigStorage) => void, onerror: (msg: string) => void) {
        if (!module.version) {
            throw new Error("Illegal state exception, module should have version field");
        }

        this.module = module;
        this.version = module.version;
        this.indexedDB = window.indexedDB || (window as any).mozIndexedDB
            || (window as any).webkitIndexedDB || (window as any).msIndexedDB;

        if (!this.indexedDB) {
            onerror("Indexed db is not supported on this host");
            return;
        }

        try {
            const openRequest = this.indexedDB.open("gpx-bigstorage (" + this.version + ")", 1);
            openRequest.onerror = (event) => {
                onerror("Can't open BigStorage database" + openRequest.error);
            };
            openRequest.onsuccess = (event) => {
                this.db = openRequest.result;
                onready(this);

                window.addEventListener("beforeunload", () => {
                    this.db.close();
                    this.module.log("Closing database...");
                }, false);
            };
            openRequest.onupgradeneeded = (event) => {
                try {
                    this.db = openRequest.result;
                    this.db.onerror = (error) => {
                        onerror("Can't upgrade BigStorage database: " + error);
                    };

                    this.db.createObjectStore(this.storeName);
                } catch (e) {
                    onerror("Can't upgrade BigStorage database");
                }
            };
        } catch (e) {
            onerror("ERR! Can't open BigStorage dabase " + e);
        }
    }

    public put(key: string, data: any, onflush: () => void, tries = 0) {
        try {
            const transaction = this.db.transaction(this.storeName, "readwrite");
            transaction.onerror = (e) => {
                this.module.log("ERR! Transaction write is errored, " + transaction.error);
            };
            transaction.onabort = (e) => {
                this.module.log("ERR! Transaction write is aborted, " + transaction.error);
            };
            transaction.oncomplete = () => {
                onflush();
            };
            transaction.objectStore(this.storeName).put(data, key);
        } catch (e) {
            if (tries < 3) {
                this.module.log("ERR! Can't PUT data to cache, scheduling retry [" + (tries + 1) + "] in 5 sec...", e);
                const retry = () => this.put(key, data, onflush, tries + 1);
                setTimeout(retry, 5000);
            } else {
                this.module.log("ERR! Can't PUT data to cache, no more tries... ", e);
            }
        }
    }

    public get(key: string, ondata: (data: any) => void, onerror: (msg: string) => void) {
        try {
            const transaction = this.db.transaction(this.storeName, "readonly");
            const request = transaction.objectStore(this.storeName).get(key);
            request.onerror = () => onerror("Can't read value for key '" + key + "', " + request.error);
            request.onsuccess = () => {
                if (request.result && (request.result.length > 0 || request.result.byteLength > 0)) {
                    ondata(request.result);
                } else {
                    onerror("ERR! Result is empty for key '" + key + "', result: " + request.result);
                }
            };
        } catch (e) {
            this.module.log("ERR! Can't get key from cache", e);
        }
    }

    public forEach(each: (key: string, value: any) => void, onend: () => void) {
        try {
            const transaction = this.db.transaction(this.storeName, "readonly");
            const request = transaction.objectStore(this.storeName).openCursor();
            request.onerror = () => onerror("Can't open cursor on " + this.storeName + ", " + request.error);
            request.onsuccess = (event) => {
                const cursor = (event.target as any).result as IDBCursorWithValue;
                if (cursor) {
                    each(cursor.key.toString(), cursor.value);
                    cursor.continue();
                } else {
                    onend();
                }
            };
        } catch (e) {
            this.module.log("ERR! Can't get keys from cache", e);
            onend();
        }
    }
}
