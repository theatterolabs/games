import { EngineVersionToShort } from "../../../../gpx-cli/src/commands/unity/gpx/unityengine";
import { Mapper, JsNameToNameMapper } from "../../../../gpx-cli/src/commands/unity/gpx/impl/mapper";
import { IRuntime } from "./runtime";
import { globalscall, heaprestore, heapsnapshot, Timestamp } from "./runtime-snapshot";
import { Demangle, DemangleStack, getFunctionsMapper, getFullMapper, pushcalls } from "./unity-runtime-common";

class UnityReleaseRuntime implements IRuntime {
    public name = "UnityReleaseRuntime";
    public waitForWrl = false;
    public seed: string = Date.now() + "." + Math.random() * 1000;
    public game: string;
    public module: any;
    public callInvocations: { [jsName: number]: number } = {};
    public functionsMapper: Promise<JsNameToNameMapper> | null = null;
    public fullMapper: Promise<Mapper> | null = null;
    private gameEngine: string;

    constructor(module: any) {
        this.game = module.name + "@" + module.symbolsVersion;
        this.gameEngine = this.game + EngineVersionToShort(module.engineVersion);
        this.module = module;
    }

    public logcall: (jsName: number) => void = (jsName: number) => {
        this.module.log(`ERR! logcall is called in RELEASE environement, jsName: ${jsName}`);
    }

    public wipedcall: (jsName: number) => void = (jsName: number) => {
        if (jsName in this.callInvocations) {
            return;
        }

        if (this.functionsMapper === null) {
            this.module.log(`ERR! jsName: ${jsName} was wiped out`);
        }

        this.callInvocations[jsName] = 1;

        this.getFunctionsMapper().then((mapper) => {
            this.module.log(`ERR! jsName: ${jsName} [${mapper[jsName]}] was wiped out`);
        });
    }

    public globalscall: (...globals: any[]) => void = (...globals: any[]) => {
        globalscall(this.module, globals);
    }

    public heapsnapshot = (callback: (shot: ArrayBuffer) => void) => {
        heapsnapshot(this.module, callback);
    }

    public heaprestore = (buffer: ArrayBuffer): Timestamp => {
        return heaprestore(this.module, buffer);
    }

    public demangle(jsName: number, cnames: boolean = false) {
        this.getFullMapper().then((mapper) => {
            this.module.log(Demangle(this.module, mapper, jsName, cnames));
        });
    }

    public demangleStack(stack: string, cnames: boolean = false) {
        this.getFullMapper().then((mapper) => {
            this.module.log(DemangleStack(this.module, mapper, stack, cnames));
        });
    }

    private getFunctionsMapper() {
        if (this.functionsMapper === null) {
            const gameIndex = location.href.indexOf("/#!/" + this.game + "/");
            const devIndex = location.href.indexOf("/#!/dev/");
            const gamepixDevRegExp = /gamepix.com(.*)version=/;
            const isGamepixDev = gamepixDevRegExp.test(location.href);
            if (Math.max(gameIndex, devIndex) > 0 || location.href === "about:blank") {
                this.module.log("WARN! Testkit 'dev' environment detected, loading mappers");
                this.loadFunctionsMapper();
            } else if (isGamepixDev) {
                this.module.log("WARN! Gamepix 'dev' environment detected, loading mappers");
                this.loadFunctionsMapper();
            } else {
                this.module.log("WARN! Production envirnoment detected, unable to load mappers");
                this.functionsMapper = new Promise<JsNameToNameMapper>(() => {/**/});
            }
        }
        return this.functionsMapper;
    }

    private loadFunctionsMapper()
    {
        this.functionsMapper = getFunctionsMapper(this.module);
        this.functionsMapper.then((mapper) => {
            const update = () => {
                pushcalls(this.module, this.gameEngine, this.seed, mapper, this.callInvocations);
            };
            setInterval(update, 15 * 1000); // 15s
        });
    }

    private getFullMapper() {
        if (this.fullMapper === null) {
            this.fullMapper = getFullMapper(this.module);
        }
        return this.fullMapper;
    }
}

export default function runtimeProvider(module: any) {
    return Promise.resolve(new UnityReleaseRuntime(module));
}
