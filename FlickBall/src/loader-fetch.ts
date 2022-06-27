import { LoaderDownloadTask } from "./loader-options";
import LoaderRequest from "./loader-request";

export class LoaderResponse {
    public response: Response;

    private task: LoaderDownloadTask;
    private bodyCallback?: (data: ArrayBuffer) => void;

    constructor(task: LoaderDownloadTask, response: Response) {
        this.task = task;
        this.response = response;
    }

    public onBody(bodyCallback: (data: ArrayBuffer) => void) {
        this.bodyCallback = bodyCallback;
    }

    public release() {
        if (this.bodyCallback) {
            // unfortunatelly we can't read processed response,
            // but we can request it again and browser will use cache for it

            const cachedRequest = {...this.task};
            cachedRequest.responseType = "arraybuffer";
            cachedRequest.fail = (_, status,  message) => {
                LoaderRequest.log("ERR! Can't obtain body of FETCH response for url '" +
                    this.task.url + "' status: " + status + " message: " + message);
            };
            cachedRequest.progress = () => { /**/ };
            cachedRequest.success = ((body) => {
                this.bodyCallback(body);
            });

            new LoaderFetchRequest(cachedRequest, "force-cache");
        }
    }
}

// tslint:disable-next-line:max-classes-per-file
export default class LoaderFetchRequest {

    constructor(task: LoaderDownloadTask, cache: RequestCache = "default") {
        const successFn = (response: any) => {
            task.success(response, "http");
        };

        const errorFn = (reason: any) => {
            if (task.fail) {
                task.fail(task.url, 0, reason + "");
                delete task.fail;
            }
        };

        fetch(task.url, {
            body: task.data || null,
            method: task.method,
            mode: "cors",
            credentials: "same-origin",
            redirect: "follow",
            cache,
        }).then((response) => {
            if (!response.ok || response.body == null) {
                if (task.fail) {
                    // onReadyStateChange is used here to be compatible with existent tests
                    task.fail(task.url, response.status, "onReadyStateChange");
                    delete task.fail;
                }
                return;
            }

            const totalBytes = parseInt(response.headers.get("Content-Length") || "0", 10);
            // there is no cross-browser way to track loading progress,
            // cause ReadableStream/WritableStream constructors not
            // yet implemented in some browsers
            task.progress(totalBytes, totalBytes);

            switch (task.responseType) {
                case "":
                case "text":
                    response.text()
                        .then(successFn)
                        .catch(errorFn);
                    break;
                case "json":
                    response.json()
                        .then(successFn)
                        .catch(errorFn);
                    break;
                case "arraybuffer":
                    response.arrayBuffer()
                        .then(successFn)
                        .catch(errorFn);
                    break;
                case "response":
                    successFn(new LoaderResponse(task, response));
                    break;
                default:
                    throw new Error("Unsupported responseType in fetch request: " + task.responseType);
                    break;
            }
        }).catch(errorFn);
    }
}
