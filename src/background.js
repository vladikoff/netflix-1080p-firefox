browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {
      //redirectUrl: browser.extension.getURL("cadmium-playercore-5.0008.544.011-1080p.js")
      redirectUrl: browser.extension.getURL("cadmium-playercore-1080p.js")
    };
  }, {
    urls: [
      "*://assets.nflxext.com/*/ffe/player/html/*",
      "*://www.assets.nflxext.com/*/ffe/player/html/*"
    ]
  }, ["blocking"]
);
