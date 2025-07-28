console.log('Remove "Sponsored" links extension loaded');
ads_removed = false
ai_removed = false

function removeAds() {
	const element = document.querySelectorAll("div#tvcap:not([style*='display: none'])");
	if (element) {
		element.forEach((element) => {
			element.style.display = 'none'
		})
	}
	const cuContainer = document.querySelectorAll("div.cu-container:not([style*='display: none'])");
	if (cuContainer) {
		cuContainer.forEach((element) => {
			element.style.display = 'none'
		})
	}
	if (!(element||cuContainer)) {
		console.log('removed sponsored and shopping links');
		ads_removed = true
	}
}

function removeAI() {
	if (ai_removed) return
    chrome.storage.local.get("removeAI", (data) => {
        if (!data.removeAI) return
        const element = document.querySelector("div.bzXtMb.M8OgIe.dRpWwb")
		if (element) {
			const top_elements = document.getElementsByClassName("MjjYud")
			if (top_elements) {
				found_top_visible = false
				Array.from(top_elements).forEach((element) => {
					if (element.childList && !found_top_visible) {
						element.style.paddingTop = "1.5em"
						console.log("Set the padding for the top visible element to 1.5em")
						found_top_visible = true
					}
				})
			}

        	element.style.display = 'none'
			console.log("AI overview removed.")
			ai_removed = true
			return
		}
    });
}
const observer = new MutationObserver(() => {
	removeAI()
	removeAds()
})
observer.observe(document.body, { childList: true, subtree: true })
