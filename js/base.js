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
    if (document.documentElement.scrollTop > document.querySelectorAll('.pageopt')[1].offsetTop) {
        document.querySelector('.fixedtopbar').style.visibility = "visible";
    } else {
        document.querySelector('.fixedtopbar').style.visibility = "hidden";
    }
};

function zoomtoimg(source) {
    document.querySelector('.previmglarge').src = source;
    document.querySelector('.largimgcont').style.display = '';

}

function previmg(direction) {
    var item = "";
    if (direction == "forward") {
        item = document.querySelector(".previmg:not(.hidden)").nextElementSibling;
        if (item == null || item.classList.contains("prevbottom")) {
            item = document.querySelectorAll('.previmg')[0];
        }
        document.querySelectorAll(".previmg:not(.hidden)").forEach(function(val) {
            val.classList.add("hidden");
        });
        item.classList.remove("hidden");
    } else if (direction == "back") {
        item = document.querySelector(".previmg:not(.hidden)").previousElementSibling;
        if (item == null) {
            item = document.querySelectorAll('.previmg')[document.querySelectorAll('.previmg').length - 1];
        }
        document.querySelectorAll(".previmg:not(.hidden)").forEach(function(val) {
            val.classList.add("hidden");
        });
        item.classList.remove("hidden");
    }
}