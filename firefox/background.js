browser.webRequest.onBeforeRequest.addListener(
    function(details) { 
        browser.tabs.update({
            url: "blocked.html"
        });
        return {cancel: true};
    },
    {urls: [
        "*://grabify.link/*",
        "*://mymassive.yachts/*",
        "*://stonks.boats/*",
        "*://stonks.fun/*",
        "*://toes.beauty/*",
        "*://barefoot.pics/*",
        "*://shareit.pics/*",
        "*://gamer.tattoo/*",
        "*://shipment.website/*",
        "*://imagevault.cloud/*",
        "*://sugma.mom/*",
        "*://yum.mom/*",
        "*://plz.life/*",
        "*://massive.mom/*",
        "*://massive.boats/*",
        "*://mymassive.store/*",
        "*://mymassive.top/*",
        "*://gamer.hair/*",
        "*://screenshare.pics/*",
        "*://myprivate.pics/*",
        "*://noodshare.pics/*",
        "*://stopify.co/*",
        "*://grabb.site/*",
        "*://grabify.icu/*",
        "*://grabify.world/*",
        "*://grabifyicu.com/*",
        "*://iplogger.org/*",
        "*://2no.co/*",
        "*://iplogger.com/*",
        "*://iplogger.ru/*",
        "*://yip.su/*",
        "*://iplist.ru/*",
        "*://02ip.ru/*",
        "*://iplogger.co/*",
        "*://iplogger.info/*",
        "*://ipgraber.ru/*",
        "*://ipgrabber.ru/*",
        "*://iplist.ru/*",
        "*://ezstat.ru/*",
        "*://iplis.ru/*",
        "*://maper.info/*",
        "*://wl.gl/*",
        "*://ed.tc/*",
        "*://bc.ax/*",
        "*://ps3cfw.com/*",
        "*://tracker.iplocation.net/*",
        "*://yȯutube.com/*",
        "*://gyazo.nl/*",
        "*://goo.by/*",
        "*://ikwyd.com/*",
        "*://ip-trap.com/*",
        "*://ythingy.com/*",
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
        "*://*.nigger.email/*",
        "*://nigger.email/*"
    ]},
    ["blocking"]
);

browser.browserAction.setTitle({
    title:'Anti-BonziWORLD is active.'
});
