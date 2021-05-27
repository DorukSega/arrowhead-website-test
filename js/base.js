function load() {
    if (navigator.userAgent.indexOf('Trident/') > 0 || navigator.userAgent.indexOf('MSIE ') > 0) {
        document.body.innerHTML = "";
        var elem = document.createElement('h1');
        elem.innerText = " Well done, you've reached mesozoic era 🎉";
        document.body.appendChild(elem);
    }
}

function postfeed() {
    /* guidlines for later:
    make a array
    0: title
    1: first paragraph or preview
    2: first image 
    3: link
    Then put it in news section
    */
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
    if (document.documentElement.scrollTop > document.querySelectorAll('.toprow')[1].offsetTop) {
        document.querySelector('.fixedtopbar').style.visibility = "visible";
    } else {
        document.querySelector('.fixedtopbar').style.visibility = "hidden";
    }
    if (document.documentElement.scrollTop > document.querySelector('.newscont').offsetTop & document.documentElement.scrollTop < document.querySelector('.faqcont').offsetTop) {
        document.querySelectorAll(".option").forEach(function(val) {
            val.classList.remove("selected");
        });
        document.querySelectorAll(".newsoption").forEach(function(val) {
            val.classList.add("selected");
        });
    } else if (document.documentElement.scrollTop > document.querySelector('.faqcont').offsetTop & document.documentElement.scrollTop < document.querySelector('.teamcont').offsetTop) {
        document.querySelectorAll(".option").forEach(function(val) {
            val.classList.remove("selected");
        });
        document.querySelectorAll(".faqoption").forEach(function(val) {
            val.classList.add("selected");
        });
    } else if (document.documentElement.scrollTop > document.querySelector('.teamcont').offsetTop) {
        document.querySelectorAll(".option").forEach(function(val) {
            val.classList.remove("selected");
        });
        document.querySelectorAll(".teamoption").forEach(function(val) {
            val.classList.add("selected");
        });
    } else if (document.querySelector('.aboutoption').classList.contains("selected") == false) {
        document.querySelectorAll(".option").forEach(function(val) {
            val.classList.remove("selected");
        });
        document.querySelectorAll(".aboutoption").forEach(function(val) {
            val.classList.add("selected");
        });
    }
};

function zoomtoimg(source) {
    document.querySelector('.previmglarge').src = source;
    document.querySelector('.largimgcont').style.display = '';
}

function previmg(direction) {
    var item = "";
    var titem = "";
    if (direction == "forward") {

        titem = document.querySelector(".prevtext:not(.hidden)").nextElementSibling;
        if (titem == null || titem.classList.contains("arrow")) {
            titem = document.querySelectorAll('.prevtext')[0];
        }
        document.querySelectorAll(".prevtext:not(.hidden)").forEach(function(val) {
            val.classList.add("hidden");
        });
        titem.classList.remove("hidden");

        item = document.querySelector(".previmg:not(.hidden)").nextElementSibling;
        if (item == null || item.classList.contains("prevbottom")) {
            item = document.querySelectorAll('.previmg')[0];
        }
        document.querySelectorAll(".previmg:not(.hidden)").forEach(function(val) {
            val.classList.add("hidden");
        });
        item.classList.remove("hidden");
    } else if (direction == "back") {
        titem = document.querySelector(".prevtext:not(.hidden)").previousElementSibling;
        if (titem == null || titem.classList.contains("arrow")) {
            titem = document.querySelectorAll('.prevtext')[document.querySelectorAll('.prevtext').length - 1];
        }
        document.querySelectorAll(".prevtext:not(.hidden)").forEach(function(val) {
            val.classList.add("hidden");
        });
        titem.classList.remove("hidden");

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