import { jsNameToNameFile, JsNameToNameMapper, Mapper, mapperFile } from "../../../../gpx-cli/src/commands/unity/gpx/impl/mapper";

export const RUNTIME_BACKEND = "https://1paawkzwe9.execute-api.us-east-1.amazonaws.com/dev";

export function getFullMapper(module: any) {
    module.log("WARN! START DONWLOADING FULL MAPPER");
    return new Promise<Mapper>((resolve) => {
        const request = new XMLHttpRequest();
        request.open("GET", mapperFile);
        request.onreadystatechange = (ev) => {
            if (request.readyState === 4 && request.status === 200) {
                module.log("WARN! DONWLOADING FULL MAPPER WELL DONE");
                resolve(JSON.parse(request.responseText));
            }
        };
        request.send();
    });
}

export function getFunctionsMapper(module: any) {
    module.log("WARN! START DONWLOADING FUNCTIONS MAPPER");
    return new Promise<JsNameToNameMapper>((resolve) => {
        const request = new XMLHttpRequest();
        request.open("GET", jsNameToNameFile);
        request.onreadystatechange = (ev) => {
            if (request.readyState === 4 && request.status === 200) {
                module.log("WARN! DONWLOADING FUNCTIONS MAPPER WELL DONE");
                resolve(JSON.parse(request.responseText));
            }
        };
        request.send();
    });
}

let callInvocationsVersion = 0;
export function pushcalls(module: any, gameEngine: string, seed: string, mapper: JsNameToNameMapper,
                          callInvocations: { [jsName: number]: number }) {
    module.log("WARN! PUSHCALLS");
    if (mapper == null) {
        module.log("ERR! Symbols undefined");
        return;
    }

    const keys = Object.keys(callInvocations);
    const version = keys.length;
    if (version === 0 || callInvocationsVersion === version) {
        return;
    }

    callInvocationsVersion = version;

    const namedInvocations: { [fname: string]: number } = {};
    for (const key of keys) {
        const jsName = parseInt(key, 10);
        const names: string[] | string = mapper[jsName];
        if (names) {
            if (typeof names === "string") {
                namedInvocations[names] = callInvocations[jsName];
            } else {
                for (const fnname of names) {
                    namedInvocations[fnname] = callInvocations[jsName];
                }
            }
        } else {
            module.log(`ERR! Function jsName: ${jsName} NOT FOUND in symbols`);
        }
    }

    if (Object.keys(namedInvocations).length > 0) {
        const payload = JSON.stringify(namedInvocations);
        const putRequest = new XMLHttpRequest();
        putRequest.open("POST", RUNTIME_BACKEND + "/put?seed=" + seed + "&game=" + gameEngine);
        putRequest.setRequestHeader("Content-type", "application/json");
        putRequest.send(payload);
        putRequest.onreadystatechange = (ev) => {
            if (putRequest.readyState === 4 && putRequest.status === 200) {
                module.log(`WARN! PUSHCALLS(${Object.keys(namedInvocations).length}) - ok`);
            }
        };
    } else {
        module.log("WARN! PUSHCALLS - no need");
    }
}

export function Demangle(module: any, mapper: Mapper | null, jsName: number, cnames: boolean = false) {
    if (mapper == null) {
        return "Symbols undefined";
    }
    const info = mapper.jsNameToFunctionInfo[jsName];
    if (info == null) {
        return "Function jsName: " + jsName + " not found";
    }

    let name = info.cName;

    if (!cnames && info.csSymbols.length > 0) {
        info.csSymbols.forEach((symbol) => {
            name += " " + symbol.csName;
        });
    }
    return "jsName: " + jsName + " demagnled: " + name;
}

export function DemangleStack(module: any, mapper: Mapper, stack: string, cnames: boolean = false) {
    return stack.replace(/.*\[(\d+)\].*/g, (all, g1) => {
        return Demangle(module, mapper, parseInt(g1), cnames);
    });
}
