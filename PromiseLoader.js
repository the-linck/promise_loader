/**
 * Loads an script into the document using a promise atop of onLoad/onError
 * events, allowing all promise operations over dynamic loading.
 * 
 * @param {String} Src Url of the script
 * @param {Boolean} Head If the script must be appended to document head (default: true)
 * @param {Object<String, String>} Attributes Extra attributes for the script tag
 * @returns {Promise<Event>}
 */
export default function PromiseLoad (Src, Head, Attributes) {
    return new Promise((onResolve, onReject) => {
        /**
         * @type {HTMLElement}
         */
        let Container;
        
        if (Head === undefined || Head === null) {
            Head = true;
        }
        if (Head)
        {
            Container =  document.head;
        } else {
            Container = document.body;
        }
        
        
        const Script = document.createElement('script');
        if (typeof Attributes === "object" && Attributes !== null) {
            for (const Name in Attributes) {
                Script.setAttribute(Name, Attributes[Name]);
            }
        }

        Script.addEventListener("error", (Event) => {
            console.error(Event);

            onReject(Event);
        });
        Script.addEventListener("load", onResolve);
        Script.src = Src;

        Container.appendChild(Script);
    })
}