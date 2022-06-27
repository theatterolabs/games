import LoaderRequest from "./loader-request";

/* tslint:disable:only-arrow-functions */

// Host
// ==================
// This class is for getting host configuration such as: wasmSupport, cpuCount, etc

// **SystemInfo** is compatible with Unity SystemInfo
export interface ISystemInfo {
    width: number;
    height: number;
    browser: string;
    browserVersion: string;
    mobile: boolean;
    os: string;
    osVersion: string;
    gpu: string;
    deviceModel: string;
    logicalCores: number;
    screenWidth: number;
    screenHeight: number;
    language: string;
    hasWebGL: number;
    hasCursorLock: number;
    hasFullscreen: number;
    hasThreads: boolean;
    hasWasm: boolean;
    webglContextAttributes: {
        preserveDrawingBuffer: boolean;
    };
}

interface IDeviceInfo {
    cpu: string;
    width: number;
    height: number;
    model: string;
}

const iPhones: IDeviceInfo[] = [
    {cpu: "a7",   width: 640,  height: 1136, model: "iPhone 5/iPhone 5s"},
    {cpu: "a7",   width: 1536, height: 2048, model: "iPad Air/iPad Mini 2/iPad Mini 3"},
    {cpu: "a8",   width: 640,  height: 1136, model: "iPod touch (6th gen)"},
    {cpu: "a8",   width: 750,  height: 1334, model: "iPhone 6"},
    {cpu: "a8",   width: 1242, height: 2208, model: "iPhone 6 Plus"},
    {cpu: "a8",   width: 1536, height: 2048, model: "iPad Air 2/iPad Mini 4"},
    {cpu: "a9",   width: 640,  height: 1136, model: "iPhone SE"},
    {cpu: "a9",   width: 750,  height: 1334, model: "iPhone 6s"},
    {cpu: "a9",   width: 1242, height: 2208, model: "iPhone 6s Plus"},
    {cpu: "a9x",  width: 1536, height: 2048, model: "iPad Pro (1st gen 9.7-inch)"},
    {cpu: "a9x",  width: 2048, height: 2732, model: "iPad Pro (1st gen 12.9-inch)"},
    {cpu: "a10",  width: 750,  height: 1334, model: "iPhone 7"},
    {cpu: "a10",  width: 1242, height: 2208, model: "iPhone 7 Plus"},
    {cpu: "a10x", width: 1668, height: 2224, model: "iPad Pro (2th gen 10.5-inch)"},
    {cpu: "a10x", width: 2048, height: 2732, model: "iPad Pro (2th gen 12.9-inch)"},
    {cpu: "a11",  width: 750,  height: 1334, model: "iPhone 8"},
    {cpu: "a11",  width: 1242, height: 2208, model: "iPhone 8 Plus"},
    {cpu: "a11",  width: 1125, height: 2436, model: "iPhone X"},
    {cpu: "a12",  width: 828,  height: 1792, model: "iPhone Xr"},
    {cpu: "a12",  width: 1125, height: 2436, model: "iPhone Xs"},
    {cpu: "a12",  width: 1242, height: 2688, model: "iPhone Xs Max"},
    {cpu: "a12x", width: 1668, height: 2388, model: "iPad Pro (3rd gen 11-inch)"},
    {cpu: "a12x", width: 2048, height: 2732, model: "iPad Pro (3rd gen 12.9-inch)"},
    {cpu: "a13",  width: 828,  height: 1792, model: "iPhone 11"},
    {cpu: "a13",  width: 1125, height: 2436, model: "iPhone 11 Pro"},
    {cpu: "a13",  width: 1242, height: 2688, model: "iPhone 11 Pro Max"},
];

export class GpxHostClass {

    public wasmSupported: boolean;
    public wasmStreaming: boolean;
    public hardwareConcurrency: number;
    public legacyVm: boolean;
    public brotliSupported: boolean;
    public webpSupported: boolean;
    public systemInfo: ISystemInfo;

    private caniuse: {[index: string]: Promise<boolean>} = {};

    constructor() {
        const gpxHost = this;

        // Here we check WebAssembly support

        this.wasmSupported = false;
        this.wasmStreaming = false;
        try {
            if (typeof WebAssembly === "object" && typeof WebAssembly.instantiate === "function"
                && typeof WebAssembly.compile === "function") {
                const wmodule = new (WebAssembly.Module)(Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00));
                if (wmodule instanceof WebAssembly.Module) {
                    this.wasmSupported = new (WebAssembly.Instance)(wmodule) instanceof WebAssembly.Instance;
                    this.wasmStreaming = this.wasmSupported && typeof WebAssembly.instantiateStreaming === "function";
                }
            }
        } catch (e) {
            // nothing to do
        }

        // Here we get count of host cpu
        /* tslint:disable:no-bitwise */

        this.hardwareConcurrency = navigator.hardwareConcurrency | 0;

        // Here we detect is host is legacy vm (like IE) and supports brotli
        this.legacyVm = typeof Int32Array.from === "undefined" ||
            !(Math.imul && Math.fround && Math.clz32 && Math.trunc);
        this.brotliSupported = !this.legacyVm;

        // Detect if browser supports webp decoding
        this.webpSupported = false;
        /* tslint:disable:max-line-length */
        const webpSrc = "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==";
        const webpImage = new Image();
        webpImage.onload = () => {
            gpxHost.webpSupported = webpImage.width === 2 && webpImage.height === 1;
        };
        webpImage.src = webpSrc;

        // Polyfilling missing stuff
        if (!Math.imul || Math.imul(0xffffffff, 5) !== -5) {
            Math.imul = function imul(a: any, b: any) {
                const ah = a >>> 16;
                const al = a & 0xffff;
                const bh = b >>> 16;
                const bl = b & 0xffff;
                return (al * bl + ((ah * bl + al * bh) << 16)) | 0;
            };
        }
        Math.imul = Math.imul;

        if (!Math.fround) { Math.fround = function(x) { return x; }; }
        Math.fround = Math.fround;

        if (!Math.clz32) {
            Math.clz32 = function(x) {
                x = x >>> 0;
                for (let i = 0; i < 32; i++) {
                    if (x & (1 << (31 - i))) { return i; }
                }
                return 32;
            };
        }
        Math.clz32 = Math.clz32;

        if (!Math.trunc) {
            Math.trunc = function(x) {
                return x < 0 ? Math.ceil(x) : Math.floor(x);
            };
        }
        Math.trunc = Math.trunc;

        this.systemInfo = function() {
            /* tslint:disable:all */
            var e, t, r, n = "-",
                o = navigator.appVersion,
                a = navigator.userAgent,
                i = navigator.appName,
                s = navigator.appVersion,
                d = parseInt(navigator.appVersion, 10),
                cores = navigator.hardwareConcurrency;
            (t = a.indexOf("Opera")) != -1 ? (i = "Opera", s = a.substring(t + 6), (t = a.indexOf("Version")) != -1 && (s = a.substring(t + 8))) : (t = a.indexOf("MSIE")) != -1 ? (i = "Microsoft Internet Explorer", s = a.substring(t + 5)) : (t = a.indexOf("Edge")) != -1 ? (i = "Edge", s = a.substring(t + 5)) : (t = a.indexOf("Chrome")) != -1 ? (i = "Chrome", s = a.substring(t + 7)) : (t = a.indexOf("Safari")) != -1 ? (i = "Safari", s = a.substring(t + 7), (t = a.indexOf("Version")) != -1 && (s = a.substring(t + 8))) : (t = a.indexOf("Firefox")) != -1 ? (i = "Firefox", s = a.substring(t + 8)) : a.indexOf("Trident/") != -1 ? (i = "Microsoft Internet Explorer", s = a.substring(a.indexOf("rv:") + 3)) : (e = a.lastIndexOf(" ") + 1) < (t = a.lastIndexOf("/")) && (i = a.substring(e, t), s = a.substring(t + 1), i.toLowerCase() == i.toUpperCase() && (i = navigator.appName)), (r = s.indexOf(";")) != -1 && (s = s.substring(0, r)), (r = s.indexOf(" ")) != -1 && (s = s.substring(0, r)), (r = s.indexOf(")")) != -1 && (s = s.substring(0, r)), d = parseInt("" + s, 10), isNaN(d) ? (s = "" + parseFloat(navigator.appVersion), d = parseInt(navigator.appVersion, 10)) : s = "" + parseFloat(s);
            var l = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(o),
                u = n,
                c = [{
                    s: "Windows 3.11",
                    r: /Win16/
                }, {
                    s: "Windows 95",
                    r: /(Windows 95|Win95|Windows_95)/
                }, {
                    s: "Windows ME",
                    r: /(Win 9x 4.90|Windows ME)/
                }, {
                    s: "Windows 98",
                    r: /(Windows 98|Win98)/
                }, {
                    s: "Windows CE",
                    r: /Windows CE/
                }, {
                    s: "Windows 2000",
                    r: /(Windows NT 5.0|Windows 2000)/
                }, {
                    s: "Windows XP",
                    r: /(Windows NT 5.1|Windows XP)/
                }, {
                    s: "Windows Server 2003",
                    r: /Windows NT 5.2/
                }, {
                    s: "Windows Vista",
                    r: /Windows NT 6.0/
                }, {
                    s: "Windows 7",
                    r: /(Windows 7|Windows NT 6.1)/
                }, {
                    s: "Windows 8.1",
                    r: /(Windows 8.1|Windows NT 6.3)/
                }, {
                    s: "Windows 8",
                    r: /(Windows 8|Windows NT 6.2)/
                }, {
                    s: "Windows 10",
                    r: /(Windows 10|Windows NT 10.0)/
                }, {
                    s: "Windows NT 4.0",
                    r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
                }, {
                    s: "Windows ME",
                    r: /Windows ME/
                }, {
                    s: "Android",
                    r: /Android/
                }, {
                    s: "Open BSD",
                    r: /OpenBSD/
                }, {
                    s: "Sun OS",
                    r: /SunOS/
                }, {
                    s: "Linux",
                    r: /(Linux|X11)/
                }, {
                    s: "iOS",
                    r: /(iPhone|iPad|iPod)/
                }, {
                    s: "Mac OS X",
                    r: /Mac OS X/
                }, {
                    s: "Mac OS",
                    r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
                }, {
                    s: "QNX",
                    r: /QNX/
                }, {
                    s: "UNIX",
                    r: /UNIX/
                }, {
                    s: "BeOS",
                    r: /BeOS/
                }, {
                    s: "OS/2",
                    r: /OS\/2/
                }, {
                    s: "Search Bot",
                    r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
                }];
            for (var f in c) {
                var h = c[f];
                if (h.r.test(a)) {
                    u = h.s;
                    break
                }
            }
            var p: any = n;
            try {
                switch (/Windows/.test(u) && (p = /Windows (.*)/.exec(u)[1], u = "Windows"), u) {
                    case "Mac OS X":
                        p = /Mac OS X (10[\.\_\d]+)/.exec(a)[1];
                        break;
                    case "Android":
                        p = /Android ([\.\_\d]+)/.exec(a)[1];
                        break;
                    case "iOS":
                        p = /OS (\d+)_(\d+)_?(\d+)?/.exec(o), p = p[1] + "." + p[2] + "." + (0 | p[3])
                }
            } catch {
                // do nothing
            }

            return {
                width: window.innerWidth,
                height: window.innerHeight,
                browser: i,
                browserVersion: s,
                mobile: l,
                os: u,
                osVersion: p,
                language: "en",
                hasWebGL: function () {
                    if (!(window as any).WebGLRenderingContext) return 0;
                    return 1; // @caiiiycuk: force disable webgl2
                    // var e = document.createElement("canvas"),
                    // t = e.getContext("webgl2");
                    //return t ? 2 : (t = e.getContext("experimental-webgl2"), t ? 2 : (t = e.getContext("webgl"), t || (t = e.getContext("experimental-webgl")) ? 1 : 0))
                }(),
                gpu: function () {
                    var e = document.createElement("canvas"),
                        t = e.getContext("experimental-webgl");
                    if (t) {
                        var r = (t as any).getExtension("WEBGL_debug_renderer_info");
                        if (r) return (t as any).getParameter(r.UNMASKED_RENDERER_WEBGL)
                    }
                    return n;
                }(),
                deviceModel: "",
                logicalCores: cores || 0,
                screenWidth: 0,
                screenHeight: 0,
                hasCursorLock: 0,
                hasFullscreen: 0,
                hasThreads: false,
                hasWasm: gpxHost.wasmSupported,
                webglContextAttributes: {
                    preserveDrawingBuffer: false,
                }
            };
            /* tslint:enable:all */
        }();

        const screen = this.getPortraitScreenResolution();
        this.systemInfo.screenHeight = screen.height;
        this.systemInfo.screenWidth = screen.width;
        this.systemInfo.deviceModel = this.getDeviceModel(this.systemInfo.mobile,
                                                          this.systemInfo.gpu,
                                                          navigator.userAgent,
                                                          screen);
    }

    // Help function to get query parameter by name

    public getParameterByName(name: string, url?: string) {
        if (!url) {
            url = window.location.href;
        }

        name = name.replace(/[\[\]]/g, "\\$&");
        const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
        const results = regex.exec(url);

        if (!results) {
            return null;
        }

        if (!results[2]) {
            return "";
        }

        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    public caniuseBrotli(url: string): Promise<boolean> {
        return this.caniuseTool(url, "brotli", "br");
    }

    public caniuseGzip(url: string): Promise<boolean> {
        return this.caniuseTool(url, "gzip", "gz");
    }

    private caniuseTool(url: string, tool: string, ext: string): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            const prefix = url.substr(0, url.lastIndexOf("/"));
            const key = prefix + ext + "/caniuse." + ext;

            if (typeof this.caniuse[key] === "undefined") {
                this.caniuse[key] = new Promise<boolean>((caniuse) => {
                    new LoaderRequest(key +  "?time=" + Date.now(), {
                        fail: () => caniuse(false),
                        success: (data) => {
                            if (data !== tool) {
                                // tslint:disable-next-line:no-console
                                console.error("ERR!", tool, " is not supported by browser, but supported by game", data, "!==", tool);
                            }
                            caniuse(data === tool);
                        },
                    });
                });
            }

            this.caniuse[key].then(resolve);
        });
    }

    private getDeviceModel(isMobile: boolean, gpu: string, browserIdentifier: string,
                           screen: {width: number, height: number}) {
        if (!isMobile) {
            return "desktop/laptop";
        }

        const matchesIphone = gpu.match(/^apple+[a-zA-Z0-9_\s]+gpu$/i);
        if (!matchesIphone) {
            return this.getAndroidDeviceModel(browserIdentifier);
        }
        return this.getAppleDeviceModel(gpu, screen);
    }

    private getAndroidDeviceModel(browserIdentifier: string) {
        const androidRegExps = [ /Android[\s][\d]+\.[\d]+\.[\d]+; [A-Za-z]{2}\-[A-Za-z]{2}\; (.+) Build/,
                                /Android[\s][\d]+\.[\d]+\.[\d]+; (.+) Build/,
                                /Android(.+)Build/];

        for (const regExp of androidRegExps) {
            const matchesAndroid = browserIdentifier.match(regExp);
            if (matchesAndroid && matchesAndroid.length > 0) {
                return matchesAndroid[1];
            }
        }
        return "unknown Android";
    }

    private getAppleDeviceModel(gpu: string, screen: {width: number, height: number}) {
        let model = "";
        for (const iPhone of iPhones) {
            if (screen.width === Math.min(iPhone.width, iPhone.height)
              && screen.height === Math.max(iPhone.width, iPhone.height)) {
                model += model.length > 0 ? "/" + iPhone.model : iPhone.model;
            }
        }
        return model.length > 0 ? model : "unknown iPhone";
    }

    private getPortraitScreenResolution() {
        const ratio = window.devicePixelRatio || 1;
        return { width: Math.min(screen.width, screen.height) * ratio,
                 height: Math.max(screen.width, screen.height) * ratio };
    }
}

// Instaniate host
export const GpxHost = new GpxHostClass();
