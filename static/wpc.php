

(function(w) {
    var origin = 'https://astg.widerplanet.com';
    var wg = w.document.getElementById('wp_tg_cts');
    function doPair(url) {
        if (wg == null) { return; }
        (function(_url) {
            var frm = w.document.createElement('IFRAME');
            frm.width = '1px';
            frm.height = '1px';
            frm.style.display = 'none';
            frm.src= _url;
            frm.title = 'tgpairing';
            frm.addEventListener('load', function(o) {
                try {
                    frm.contentWindow.postMessage({}, origin);
                } catch(e) {}
            });

            wg.appendChild(frm);
            setTimeout(function() {
                wg.removeChild(frm);
            }, 3000);
        })(url);
    }

    try {
        doPair('https://astg.widerplanet.com/delivery/storage?request_id=e41453f36930eb6aa2af20de8edb37ed&wp_uid=2-e1402529f946428384f9341d65247b8a-s1594612286.6418%7Cmac_osx%7Cchrome-1pb8rt9&qsc=70ev4d');
    } catch(e) {}
})(window);
