const blacklistedExtensions = [
    // due to bad support on iPhone *
    "OES_texture_float", "OES_texture_float_linear",
    "OES_texture_half_float", "OES_texture_half_float_linear",
    "EXT_color_buffer_half_float", "WEBGL_color_buffer_float",
];

const blacklistedExtensionsMap: {[index: string]: boolean} = {};
blacklistedExtensions.forEach((name) => blacklistedExtensionsMap[name] = true);

export const WebGLWorkarounds = {
    apply: (canvas: HTMLCanvasElement) => {
        const fn = canvas.getContext as any;
        canvas.getContext = (...args: any[]) => {
            const ctx = fn.apply(canvas, args);
            if (args[0] === "webgl") {
                canvas.getContext = fn;
                const whitelisted: string[] = [];
                const extensions = ctx.getSupportedExtensions();
                // tslint:disable-next-line:no-console
                console.log("Validating supported extensions", extensions);
                extensions.forEach((name: any) => {
                    if (blacklistedExtensionsMap[name] === true) {
                        // tslint:disable-next-line:no-console
                        console.warn("WARN! Removing blacklisted extension", name);
                    } else {
                        whitelisted.push(name);
                    }
                });
                ctx.getSupportedExtensions = () => whitelisted;
            }
            return ctx;
        };
    },
};
