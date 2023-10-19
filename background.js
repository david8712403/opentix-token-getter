// 在 background.js 中
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.content) {
        chrome.storage.local.set({ opentixRefreshToken: message.content });
    }
});
