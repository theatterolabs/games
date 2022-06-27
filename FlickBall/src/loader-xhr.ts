import LoaderRequest from "./loader-request";

import { LoaderDownloadTask } from "./loader-options";

export default class LoaderXhrRequest {

    private task: LoaderDownloadTask;
    private xhr: XMLHttpRequest;

    constructor(task: LoaderDownloadTask) {
        this.task = task;
        this.xhr = new XMLHttpRequest();
        this.xhr.open(task.method, task.url, true);
        if (task.method === "POST") {
            this.xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        }
        this.xhr.overrideMimeType("text/plain; charset=x-user-defined");
        if (typeof this.xhr.addEventListener === "function") {
            this.xhr.addEventListener("progress", (evt) => {
                task.progress(evt.total, evt.loaded);
            });

            this.xhr.addEventListener("error", (evt) => {
                if (task.fail) {
                    task.fail(task.url, this.xhr.status, "error event");
                    delete task.fail;
                }
            });
        }

        this.xhr.onreadystatechange = () => this._onReadyStateChange();
        this.xhr.responseType = task.responseType === "response" ? "arraybuffer"
            : (task.responseType as XMLHttpRequestResponseType);
        this.xhr.send(task.data);
    }

    private _onReadyStateChange() {
        const task = this.task;
        if (this.xhr.readyState === 4) {
            if (this.xhr.status === 200) {
                task.success(this.xhr.response, "http");
            } else if (task.fail) {
                task.fail(task.url, this.xhr.status, "onReadyStateChange");
                delete task.fail;
            }
        }
    }

}
