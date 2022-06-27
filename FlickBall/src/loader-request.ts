import { BigStorage } from "./bigstorage/bigstorage";
import BigStorageNoop from "./bigstorage/bigstorage-noop";

import { LoaderDownloadTask, LoaderRequestOptions } from "./loader-options";

import Brotli from "./brotli";
import LoaderFetchRequest, { LoaderResponse } from "./loader-fetch";
import LoaderXhrRequest from "./loader-xhr";

// LoaderRequest
// =============
// Wrapper over XMLHttpRequest or fetch API to make server calls.
// Additionally this calss control cache for requests.

export default class LoaderRequest {
    public static useFetchApi = true;

    public static cache: BigStorage = new BigStorageNoop();
    public static bytesReceived = 0;
    public static xhrTime = 0;
    public static brotli = false;
    public static mapping(url: string) {
        return url;
    }
    public static log(msg: string) {
        /**/
    }
    // tslint:disable-next-line:no-shadowed-variable
    public static changeToCompressedUrl(url: string, ext: string) {
        const nameStart = url.lastIndexOf("/") + 1;
        let nameEnd = url.lastIndexOf("?");
        if (nameEnd === -1) {
            nameEnd = url.length;
        }

        return url.substr(0, nameStart) + ext + "/" +
            url.substr(nameStart, nameEnd - nameStart) + "." + ext +
            url.substr(nameEnd, url.length - nameEnd);
    }

    private startedAt: number = Date.now();
    private bytesReceived: number = 0;

    constructor(resource: string, options: LoaderRequestOptions) {
        let responseType = options.responseType || "text";
        if (LoaderRequest.brotli) {
            responseType = "arraybuffer";
        }

        const method = options.method || "GET";
        const progress = ((total: number, loaded: number) => {
            this.bytesReceived = loaded;
            if (options.progress) {
                options.progress(total, loaded);
            }
        });

        // tslint:disable-next-line:no-shadowed-variable
        const fail = options.fail || ((url: string, status: number, message: string) => {
            LoaderRequest.log("ERR! Unable to download '" + resource + "' (" + url + "), message: " + message);
        });

        let url = LoaderRequest.mapping(resource);
        if (typeof url !== "string") {
            options.success(url, "external");
            return;
        }

        if (LoaderRequest.brotli) {
            url = url + ".br";
        }

        const useCache = method === "GET" && url.indexOf("?") < 0 &&
            !(url.startsWith("blob:") || url.startsWith("http:") || url.startsWith("https:"));

        const doRealLoad = (reason: string) => {
            const success = (data: any, origin: "cache" | "http" | "external") => {
                LoaderRequest.xhrTime += Date.now() - this.startedAt;

                LoaderRequest.bytesReceived += this.bytesReceived;

                if (LoaderRequest.brotli) {
                    const bytes = Brotli.decode(new Int8Array(data));
                    if (responseType === "arraybuffer") {
                        data = bytes.buffer;
                    } else {
                        data = this.arrayBufferToString(bytes);
                    }
                }

                if (useCache) {
                    // tslint:disable-next-line:no-shadowed-variable
                    const writeCache = (data: ArrayBuffer) => {
                        LoaderRequest.cache.put(url, data, () => { /**/ });
                    };

                    if (data instanceof LoaderResponse) {
                        (data as LoaderResponse).onBody(writeCache);
                    } else {
                        writeCache(data);
                    }
                }

                options.success(data, origin);
            };

            const downloadTask: LoaderDownloadTask = {
                url,
                method,
                responseType,
                data: options.data,
                success,
                progress,
                fail,
            };

            if (responseType === "response" && LoaderRequest.useFetchApi && !LoaderRequest.brotli) {
                new LoaderFetchRequest(downloadTask);
            } else {
                new LoaderXhrRequest(downloadTask);
            }
        };

        if (useCache) {
            LoaderRequest.cache.get(url, (data) => {
                options.success(data, "cache");
            }, doRealLoad);
        } else {
            doRealLoad("cache is disabled");
        }
    }

    private arrayBufferToString(buffer: ArrayBuffer) {
        const bufView = new Uint16Array(buffer);
        const length = bufView.length;
        let result = "";
        let maxCallSize = Math.pow(2, 16) - 1;
        let i = 0;
        while (i < length) {
            if (i + maxCallSize > length) {
                maxCallSize = length - i;
            }
            result += String.fromCharCode.apply(null, bufView.subarray(i, i + maxCallSize));
            i += maxCallSize;
        }
        return result;
    }

}
