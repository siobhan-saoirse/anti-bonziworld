// DEPRECATED
/*
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        chrome.tabs.update({
            url: "blocked.html",
        });
        return { cancel: true };
    },
    {
        urls: [
            "*://bonziworld.org/*",
            "*://*.bonziworld.org/*",
            "*://bonziworld.co/*",
            "*://*.bonziworld.co/*",
            "*://uranohoshi.in/*",
            "*://*.uranohoshi.in/*",
            "*://bonzi.ga/*",
            "*://*.bonzi.ga/*",
            "*://bonzi.tk/*",
            "*://*.bonzi.tk/*",
            "*://bonzi.ml/*",
            "*://*.bonzi.ml/*",
            "*://bonziworldrevived.tk/*",
            "*://*.bonziworldrevived.tk/*",
            "*://bonkeyword.tk/*",
            "*://*.bonkeyword.tk/*",
        ],
    },
    ["blocking"]
);
chrome.browserAction.setTitle({
    title: "Anti-BonziWORLD is active.",
});
*/