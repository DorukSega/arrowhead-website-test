function postfeed() {
    let parser = new RSSParser();
    parser.parseURL('http://' + window.location.hostname + ':4050/medium', function(err, feed) {
        if (err) throw err;
        console.log(feed.title);
        feed.items.forEach(function(entry) {
            console.log(entry.title + ':' + entry.link);
        })
    })
}
window.onscroll = function() {
    if (document.documentElement.scrollTop > document.querySelector('.pageopt').offsetTop) {
        document.querySelector('.fixedtopbar').style.visibility = "visible";
    } else {
        document.querySelector('.fixedtopbar').style.visibility = "hidden";
    }
};