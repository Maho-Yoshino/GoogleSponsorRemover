document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get("opera_allow_spr", (data) => {
        if ((navigator.userAgent.includes('Opera') || navigator.userAgent.includes('OPR')) && !data.opera_allow_spr) {
            const container = document.createElement('div')
            container.innerHTML = `
                <hr>
                <p style="font-size:1.5em;color:red;">The currently used browser is from Opera, so you will have to enable the "Allow access to search page results" checkbox in the extensions tab. This sadly cannot be done automatically, and is essential for the functionality of this extension.</p>
                <input type="checkbox" id="opera_allow_spr"><label for="opera_allow_spr">I acknowledge the above text, and have enabled the said permission.</label>
            `
            document.body.appendChild(container)
            const opera_allow_spr = container.querySelector("input#opera_allow_spr");
            opera_allow_spr.addEventListener("change", () => {
                container.remove()
                chrome.storage.local.set({ opera_allow_spr: true })
            });
        }
    });
});