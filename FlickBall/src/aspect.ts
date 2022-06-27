import { IOrientation } from "gpx-games-config";

export function GetSizeWithAspectRatio(width: number, height: number, targetAspect: number) {
    const screenAspect = width / height;
    if (screenAspect === targetAspect) {
        return [width, height];
    }
    const calculatedWidth = Math.round(height * targetAspect);
    if (calculatedWidth <= width) {
        return [calculatedWidth, height];
    }
    const calculatedHeight = Math.round(width / targetAspect);
    return [width, calculatedHeight];
}

export function GetAspectRatio(aspectRange: number[], orientation: IOrientation, proxy: WindowProxy) {
    if (aspectRange === null || !Array.isArray(aspectRange)) {
        return 9 / 16;
    }
    const screenAspectRatio = getScreenAspectRatio(orientation, proxy);
    const minAspect = Math.min.apply(null, aspectRange);
    if (screenAspectRatio <= minAspect) {
        return minAspect;
    }
    const maxAspect = Math.max.apply(null, aspectRange);
    if (screenAspectRatio >= maxAspect) {
        return maxAspect;
    }
    return screenAspectRatio;
}

function getScreenAspectRatio(orientation: IOrientation, proxy: WindowProxy) {
    const maxSide = Math.max(proxy.innerWidth, proxy.innerHeight);
    const minSide = Math.min(proxy.innerWidth, proxy.innerHeight);
    if (orientation === "landscape") {
        return maxSide / minSide;
    }
    return minSide / maxSide;
}
