// From EME Logger extension

urls = [
    'aes.js', // https://cdn.rawgit.com/ricmoo/aes-js/master/index.js
    'sha.js', // https://cdn.rawgit.com/Caligatio/jsSHA/master/src/sha.js
    'get_manifest.js'
]

for (var i = 0; i < urls.length; i++) {
    var mainScriptUrl = chrome.extension.getURL(urls[i]);

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
