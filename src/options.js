function save_options(e) {
    e.preventDefault();
    var use6Channels = document.getElementById('5.1').checked;
    // var setMaxBitrate = document.getElementById('setMaxBitrate').checked;
    browser.storage.sync.set({
        use6Channels: use6Channels,
        // setMaxBitrate: setMaxBitrate
    }, function() {
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

function restore_options() {
    function setCurrentChoice(result) {
        document.getElementById('5.1').checked = result.use6Channels;
        // document.getElementById('setMaxBitrate').checked = result.setMaxBitrate;
    }
    function onError(error) {
        console.log(`Error: ${error}`);
    }

    var getting = browser.storage.sync.get({
        use6Channels: false,
        // setMaxBitrate: false
    });
    getting.then(setCurrentChoice, onError);

}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);