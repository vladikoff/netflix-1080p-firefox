// From EME Logger extension

urls = [
    'aes.js', // https://cdn.rawgit.com/ricmoo/aes-js/master/index.js
    'sha.js', // https://cdn.rawgit.com/Caligatio/jsSHA/master/src/sha.js
    'msl_client.js',
    'netflix_max_bitrate.js'
]

// very messy workaround for accessing browser's storage outside of background / content scripts
browser.storage.sync.get(['use6Channels', 'setMaxBitrate'], function(items) {
    var use6Channels = items.window.use6channels;
    var setMaxBitrate = items.setMaxBitrate;
    var mainScript = document.createElement('script');
    mainScript.type = 'application/javascript';
    mainScript.text = 'var use6Channels = ' + use6Channels + ';' + '\n' 
	                + 'var setMaxBitrate = ' + setMaxBitrate + ';';
    document.documentElement.appendChild(mainScript);
});

for (var i = 0; i < urls.length; i++) {
    var mainScriptUrl = browser.extension.getURL(urls[i]);

    var xhr = new XMLHttpRequest();
    xhr.open('GET', mainScriptUrl, true);

    xhr.onload = function(e) {
        var xhr = e.target;
        var mainScript = document.createElement('script');
        mainScript.type = 'application/javascript';
        if (xhr.status == 200) {
            mainScript.text = xhr.responseText;
            document.documentElement.appendChild(mainScript);
        }
    };

    xhr.send();
}
