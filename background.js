chrome.tabs.onZoomChange.addListener(() => {
	chrome.tabs.setZoomSettings({ scope: "per-tab" });
});
