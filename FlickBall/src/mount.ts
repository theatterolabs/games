export interface IURLResource {
    url: string;
    close: () => void;
}

export async function MountJs(mountjs: string[],
                              proxy: WindowProxy,
                              getUrl: (file: string) => Promise<IURLResource>) {
    for (const next of mountjs) {
        const el = proxy.document.createElement("script") as HTMLScriptElement;
        const resource = await getUrl(next);
        await new Promise<void>((resolve, reject) => {
            el.onload = () => resolve();
            el.onerror = reject;
            el.src = resource.url;
            proxy.document.body.appendChild(el);
        });
        resource.close();
    }
}
