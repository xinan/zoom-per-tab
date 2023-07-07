chrome.tabs.onZoomChange.addListener((zoomChangeInfo) => {
	chrome.tabs.setZoomSettings(zoomChangeInfo.tabId, { scope: "per-tab" });
});
