//Arrowhead
function load() {
    //Internet Explorer
    if (navigator.userAgent.indexOf('Trident/') > 0 || navigator.userAgent.indexOf('MSIE ') > 0) {
        document.body.innerHTML = "<h1 style='font-size: 100px;'>ARROWHEAD</h1><h2 style='font-size: 50px;'>About</h2><h3 style='font-size: 25px;'>A classified Half-Life 2 mod about familiar places and unfamiliar dangers.</h3><h2 style='font-size: 50px;'>Links</h2><h3 style='font-size: 25px;'><a target='_blank' rel='noreferrer' href='https://twitter.com/ArrowheadDev'>Twitter</a></h3><h1>Internet Explorer 🎉</h1>";
        document.body.style.textAlign = "center";
    }
    //I guess this is a hidden feature now because
    //changing the anchor of the site is very performance intensive
    if (window.location.hash == "#news") {
        scrollto('.newscont');
    } else if (window.location.hash == "#faq") {
        scrollto('.faqcont');
    } else if (window.location.hash == "#team") {
        scrollto('.teamcont');
    } else if (window.location.hash == "#about") {
        scrollto('.aboutcont');
    }
    //detects stickyness
    var observer = new IntersectionObserver(function(entries) {
        if (entries[0].intersectionRatio === 0)
            document.querySelector(".toprow").classList.add("fixedtopbar");
        else if (entries[0].intersectionRatio === 1)
            document.querySelector(".toprow").classList.remove("fixedtopbar");
    }, {
        threshold: [0, 1]
    });
    observer.observe(document.querySelector(".topbar"));
}

function scrollto(item) {
    document.querySelector(item).scrollIntoView();
    scrollBy(0, -document.querySelector(".title").offsetHeight);
}

function remvis() {
    document.querySelector(".aboutoption").classList.remove("selected");
    document.querySelector(".newsoption").classList.remove("selected");
    document.querySelector(".faqoption").classList.remove("selected");
    document.querySelector(".teamoption").classList.remove("selected");
}

document.addEventListener('scroll', () => {
    if (window.scrollY >= document.querySelector('.aboutcont').offsetTop && window.scrollY < document.querySelector('.newscont').offsetTop) {
        remvis();
        document.querySelector(".aboutoption").classList.add("selected");
    } else if (window.scrollY >= document.querySelector('.newscont').offsetTop && window.scrollY < document.querySelector('.faqcont').offsetTop) {
        remvis();
        document.querySelector(".newsoption").classList.add("selected");
    } else if (window.scrollY >= document.querySelector('.faqcont').offsetTop && window.scrollY < document.querySelector('.teamcont').offsetTop) {
        remvis();
        document.querySelector(".faqoption").classList.add("selected");
    } else if (window.scrollY >= document.querySelector('.teamcont').offsetTop) {
        remvis();
        document.querySelector(".teamoption").classList.add("selected");
    } else {
        remvis();
        document.querySelector(".aboutoption").classList.add("selected");
    }
});

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