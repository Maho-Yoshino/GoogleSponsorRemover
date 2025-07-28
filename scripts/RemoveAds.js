console.log('Remove "Sponsored" links extension loaded');
ads_removed = false

function removeAds() {
	const element = document.querySelector("div#tvcap");
	if (element) {
		element.remove();
		console.log('removed sponsored links');
	}
	const cuContainer = document.querySelector("div.cu-container");
	if (cuContainer) {
		cuContainer.remove();
		console.log('removed shopping section');
	}
	if (!(element||cuContainer)) {
		ads_removed = true
	}
}

function removeAI() {
    chrome.storage.local.get("removeAI", (data) => {
        if (!data.removeAI) return;
        const element = document.querySelector("div.bzXtMb.M8OgIe.dRpWwb");
		if (element) {
        	element.remove()
			console.log("AI overview removed.")
		}
    });
}
const observer = new MutationObserver(() => {
	removeAI()
	removeAds()
});
observer.observe(document.body, { childList: true, subtree: true });
