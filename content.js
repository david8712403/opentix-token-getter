console.log('content script start');

// inject injected script
var s = document.createElement('script');
s.src = chrome.runtime.getURL('injected.js');
s.onload = function () {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);

// receive message from injected script
window.addEventListener('message', function (e) {
    if (e.data.type === "refreshToken") {
        console.log('content script received:', e.data.type, e.data.data);
        chrome.runtime.sendMessage({ content: e.data.data });
    }

});


