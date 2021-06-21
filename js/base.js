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
}

function scrollto(item) {
    document.querySelector(item).scrollIntoView();
    scrollBy(0, -document.querySelector(".title").offsetHeight);
}

window.onscroll = function() {
    try {
        if (document.documentElement.scrollTop > document.querySelectorAll('.toprow')[1].offsetTop) {
            document.querySelector('.fixedtopbar').style.visibility = "visible";
        } else {
            document.querySelector('.fixedtopbar').style.visibility = "hidden";
        }
        //
        if (document.documentElement.scrollTop >= document.querySelector('.newscont').offsetTop && document.documentElement.scrollTop < document.querySelector('.faqcont').offsetTop) {
            document.querySelectorAll(".option").forEach(function(val) {
                val.classList.remove("selected");
            });
            document.querySelectorAll(".newsoption").forEach(function(val) {
                val.classList.add("selected");
            });
        } else if (document.documentElement.scrollTop >= document.querySelector('.faqcont').offsetTop && (document.documentElement.scrollTop < document.querySelector('.teamcont').offsetTop && (document.documentElement.scrollTop + window.innerHeight < document.documentElement.offsetHeight))) {
            document.querySelectorAll(".option").forEach(function(val) {
                val.classList.remove("selected");
            });
            document.querySelectorAll(".faqoption").forEach(function(val) {
                val.classList.add("selected");
            });
        } else if ((document.documentElement.scrollTop >= document.querySelector('.teamcont').offsetTop) || (document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight)) {
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
    } catch (error) {
        console.log(error);
    }

    event.preventDefault();
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