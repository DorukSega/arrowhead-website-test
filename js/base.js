//Arrowhead
function load() {
    //detects stickyness
    var observer = new IntersectionObserver(function(entries) {
        if (entries[0].intersectionRatio === 0)
            document.querySelector(".toprow").classList.add("fixedtopbar");
        else if (entries[0].intersectionRatio === 1)
            document.querySelector(".toprow").classList.remove("fixedtopbar");
    }, {
        threshold: [0, 1]
    });
    observer.observe(document.querySelector(".scroll"));
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

document.addEventListener('scroll', () => {
    if (window.scrollY >= document.querySelector('#about').offsetTop && window.scrollY < document.querySelector('#news').offsetTop) {
        document.querySelector(".option[href*='#about']").classList.add("selected");
        document.querySelector(".option[href*='#news']").classList.remove("selected");
        document.querySelector(".option[href*='#faq']").classList.remove("selected");
        document.querySelector(".option[href*='#team']").classList.remove("selected");
    } else if (window.scrollY >= document.querySelector('#news').offsetTop && window.scrollY < document.querySelector('#faq').offsetTop) {
        document.querySelector(".option[href*='#about']").classList.remove("selected");
        document.querySelector(".option[href*='#news']").classList.add("selected");
        document.querySelector(".option[href*='#faq']").classList.remove("selected");
        document.querySelector(".option[href*='#team']").classList.remove("selected");
    } else if (window.scrollY >= document.querySelector('#faq').offsetTop && window.scrollY < document.querySelector('#team').offsetTop) {
        document.querySelector(".option[href*='#about']").classList.remove("selected");
        document.querySelector(".option[href*='#news']").classList.remove("selected");
        document.querySelector(".option[href*='#faq']").classList.add("selected");
        document.querySelector(".option[href*='#team']").classList.remove("selected");
    } else if (window.scrollY >= document.querySelector('#team').offsetTop || window.scrollY == window.pageYOffset) {
        document.querySelector(".option[href*='#about']").classList.remove("selected");
        document.querySelector(".option[href*='#news']").classList.remove("selected");
        document.querySelector(".option[href*='#faq']").classList.remove("selected");
        document.querySelector(".option[href*='#team']").classList.add("selected");
    } else {
        document.querySelector(".option[href*='#about']").classList.add("selected");
        document.querySelector(".option[href*='#news']").classList.remove("selected");
        document.querySelector(".option[href*='#faq']").classList.remove("selected");
        document.querySelector(".option[href*='#team']").classList.remove("selected");
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