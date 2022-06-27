import IBundleConfig from "gpx-games-config";
import { GamePixSdk, GamePixConst } from "./sdk";
import { WebGLWorkarounds } from "./webgl";
import { MountJs } from "./mount";
import { GetAspectRatio, GetSizeWithAspectRatio } from "./aspect";

async function WebSdkGame(proxy: WindowProxy) {
    const GamePix: GamePixSdk = (proxy as any).GamePix;
    const canvas = proxy.document.getElementById("canvas") as HTMLCanvasElement;

    // porting client required CONST to be defined
    if ((GamePix as any).CONST === undefined) {
        (GamePix as any).CONST = GamePixConst;
    }

    let targetAspect = 9 / 16;
    const progress: {[stage: string]: number} = {};

    function resizeCanvas() {
        const [width, height]= GetSizeWithAspectRatio(proxy.innerWidth, proxy.innerHeight, targetAspect);

        canvas.style.position = "relative";
        canvas.style.top = (proxy.innerHeight / 2) + "px";
        canvas.style.left = (proxy.innerWidth / 2) + "px";
        canvas.style.marginTop = (-1) * (height / 2) + "px";
        canvas.style.marginLeft = (-1) * (width / 2) + "px";
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        proxy.scroll(0, 1);
    }

    const Module = {
        canvas,
        debug: (proxy as any).debug,
        appInsights: (proxy as any).appInsights,
        useIndexedDb: (proxy as any).useIndexedDb,
        onresize: resizeCanvas,
        ready: (run: (...args: string[]) => void) => {
            GamePix.pause = () => {
                if ((Module as any)._gamepix_pause !== undefined) {
                    (Module as any)._gamepix_pause();
                }
            };
            GamePix.resume = () => {
                if ((Module as any)._gamepix_resume !== undefined) {
                    (Module as any)._gamepix_resume();
                }
            };
            GamePix.loaded()
                .then(() => run(GamePix.lang()))
               // tslint:disable-next-line:no-console
                .catch(console.error);
        },
        progress: (stage: string, current: number, total: number, time: number) => {
            const LoaderXhrDataGzipped = (proxy as any).LoaderXhrDataGzipped;
            const binSize = LoaderXhrDataGzipped["wbin._.js"] || 0.3;
            const dataSize = LoaderXhrDataGzipped["bin.data._.js"] || 0.7;
            const totalSize = binSize + dataSize;
            const weight: {[stage: string]: number} = {
                "bin": binSize / totalSize,
                "datafile": dataSize / totalSize,
            };

            if (total === current || total === 0) {
                progress[stage] = (weight[stage] || 0) * 100;
            } else {
                progress[stage] = (weight[stage] || 0) * current / total * 100;
            }

            let accumulatedProgress = 0;
            for (stage of Object.keys(progress)) {
                accumulatedProgress += progress[stage];
            }

            GamePix.loading(accumulatedProgress);
        },
        ping(event: GamePixConst, payload: any) {
            switch (event) {
                case GamePixConst.PARTIAL_SCORE: {
                    GamePix.updateScore(Number.parseInt(payload.score, 10));
                } break;
                case GamePixConst.LEVEL_COMPLETED: {
                    if (payload.score !== undefined) {
                        GamePix.updateScore(Number.parseInt(payload.score, 10));
                    }
                    GamePix.updateLevel(Number.parseInt(payload.level, 10));
                    GamePix.gameStop();
                } break;
                case GamePixConst.START_LEVEL: {
                    GamePix.gameAction();
                } break;
                case GamePixConst.GAME_OVER: {
                    GamePix.gameStop();
                } break;
                default: {
                    if (GamePix.ping !== undefined) {
                        GamePix.ping(event, payload);
                    }
                }
            }
        },
        hook(event: GamePixConst, payload: any, success: () => void, fail: () => void) {
            switch (event) {
                case GamePixConst.SHOW_VIDEO_REWARD: {
                    GamePix.rewardAd()
                        .then((res) => {
                            if (res.success) {
                                success();
                            } else {
                                fail();
                            }
                        })
                        .catch(fail);
                } break;
                default: {
                    if (GamePix.hook !== undefined) {
                        GamePix.hook(event, payload, success, fail);
                    }

                }
            }
        }
    }

    async function main() {
        const getFileUrl = (GamePix as any).getFileUrl || ((url: string) => {
            return {
                url,
                close: () => {/**/},
            };
        });

        const bundleConfigUrl = await getFileUrl("gpx.json");
        const config = await loadBundleConfig(bundleConfigUrl.url);
        bundleConfigUrl.close();

        const runtimes = config.runtimes;

        if (!runtimes) {
            throw new Error("Can't find runtimes property in gpx.json");
        }

        const webVariants = config.runtimes.web;

        if (!webVariants) {
            throw new Error("Game bundle is not for web sdk");
        }

        const runtime = webVariants.release || webVariants.default;

        if (!runtime) {
            throw new Error("Can't find release/default variant in gpx.json");
        }

        targetAspect = GetAspectRatio(runtime.aspect, runtime.orientation, proxy);
        resizeCanvas();

        await MountJs(runtime.mountjs, proxy, getFileUrl);
        WebGLWorkarounds.apply(Module.canvas);
    }

    function loadBundleConfig(url: string): Promise<IBundleConfig> {
        return new Promise<IBundleConfig>((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.responseType = "text";
            request.open("get", url, true);

            request.addEventListener("load", () => {
                resolve(JSON.parse(request.responseText));
            }, false);
            request.addEventListener("error", () => {
                reject(new Error("HTTP GET failed for url " + url));
            }, false);
            request.addEventListener("abort", () => {
                reject(new Error("HTTP GET canceled for url " + url));
            }, false);
            request.send();
        });
    }

    proxy.addEventListener("resize", resizeCanvas);
    (proxy as any).module = () => Module;
    (proxy as any).Module = Module;
    return await main();
}

(window as any).WebSdkGame = WebSdkGame;
