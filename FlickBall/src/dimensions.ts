export interface Size {
    width: number;
    height: number;
}

export function getSize(el: HTMLElement): Size | null {
    const styleWidth = el.style.width;
    const styleHeight= el.style.height;

    if (styleWidth.endsWith("px") && styleHeight.endsWith("px")) {
        const width = Number.parseInt(styleWidth.substr(0, styleWidth.length - 2), 10);
        const height = Number.parseInt(styleHeight.substr(0, styleHeight.length - 2), 10);

        if (!isNaN(width) && !isNaN(height)) {
            return {
                width,
                height,
            };
        }
    }

    const parent = el.parentElement;
    if (parent != null) {
        return getSize(parent);
    }

    return null;
}
