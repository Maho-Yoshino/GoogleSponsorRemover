document.addEventListener('DOMContentLoaded', () => {
    const removeAI = document.querySelector("input#removeAI")
    chrome.storage.local.get("removeAI", (data) => {
        removeAI.checked = !!data.removeAI;
    })
    removeAI.addEventListener('change', () => {
        chrome.storage.local.set({ removeAI: removeAI.checked }, () => {
            if (chrome.runtime.lastError) {
                console.error('Storage error:', chrome.runtime.lastError);
            } else {
                console.log('Saved:', removeAI.checked);
            }
        });
    })
})