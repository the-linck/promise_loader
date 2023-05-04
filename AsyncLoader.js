AsyncLoad = async (
    Src, Head
) => {
    return new Promise((onResolve, onReject) => {
        /**
         * @type {HTMLElement}
         */
        const Container = (Head || true)
            ? document.head
            : document.body
        ;
        
        const Script = document.createElement('script');
        Script.addEventListener("error", (Event) => {
            console.error(Event);

            onReject(Event);
        });
        Script.addEventListener("load", onResolve);
        Script.src = Src;

        Container.appendChild(Script);
    });
};