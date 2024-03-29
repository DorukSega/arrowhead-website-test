//Arrowhead
window.onload = () => {
    //detects stickyness
    const topRow = document.querySelector(".toprow");
    var observer = new IntersectionObserver(entries => {
        if (entries[0].intersectionRatio === 0)
            topRow.classList.add("fixedtopbar");
        else if (entries[0].intersectionRatio === 1)
            topRow.classList.remove("fixedtopbar");
    }, {
        threshold: [0, 1]
    });
    observer.observe(document.querySelector(".scroll"));

    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(a.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    document.querySelectorAll(".previmg").forEach(e => e.addEventListener("click", () => zoomtoimg(e.src))); //previmgclick

    const about = document.querySelector(".option[href*='#about']"),
        news = document.querySelector(".option[href*='#news']"),
        faq = document.querySelector(".option[href*='#faq']"),
        team = document.querySelector(".option[href*='#team']");
    const cAbout = document.querySelector('#about'),
        cNews = document.querySelector('#news'),
        cFaq = document.querySelector('#faq'),
        cTeam = document.querySelector('#team');
    var newsOTop = cNews.offsetTop,
        faqOTop = cFaq.offsetTop,
        teamOTop = cTeam.offsetTop;

    window.addEventListener("resize", () => {
        newsOTop = cNews.offsetTop;
        faqOTop = cFaq.offsetTop;
        teamOTop = cTeam.offsetTop;
    });

    window.addEventListener('scroll', e => {
        e.preventDefault();
        const winScrolly = window.scrollY;
        if (winScrolly >= cAbout.offsetTop && winScrolly < newsOTop) {
            about.classList.add("selected");
            news.classList.remove("selected");
            faq.classList.remove("selected");
            team.classList.remove("selected");
        } else if (winScrolly >= newsOTop && winScrolly < faqOTop) {
            about.classList.remove("selected");
            news.classList.add("selected");
            faq.classList.remove("selected");
            team.classList.remove("selected");
        } else if (winScrolly >= faqOTop && winScrolly < teamOTop) {
            about.classList.remove("selected");
            news.classList.remove("selected");
            faq.classList.add("selected");
            team.classList.remove("selected");
        } else if (winScrolly >= teamOTop || winScrolly == window.pageYOffset) {
            about.classList.remove("selected");
            news.classList.remove("selected");
            faq.classList.remove("selected");
            team.classList.add("selected");
        }
    }, false);
};


function zoomtoimg(source) {
    document.querySelector('.previmglarge').src = source;
    document.querySelector('.largimgcont').style.display = '';
}

function previmg(direction) {
    const prevtextVis = document.querySelector(".prevtext:not(.hidden)"), previmgVis = document.querySelector(".previmg:not(.hidden)");
    if (direction == "forward") {
        const tItem = !prevtextVis.nextElementSibling || prevtextVis.nextElementSibling.classList.contains("arrow") ? document.querySelector('.prevtext') : prevtextVis.nextElementSibling;
        const iItem = !previmgVis.nextElementSibling || previmgVis.nextElementSibling.classList.contains("prevbottom") ? document.querySelector('.previmg') : previmgVis.nextElementSibling;
        prevtextVis.classList.add("hidden");
        tItem.classList.remove("hidden");
        previmgVis.classList.add("hidden");
        iItem.classList.remove("hidden");
    } else if (direction == "back") {
        const tItem = !prevtextVis.previousElementSibling || prevtextVis.previousElementSibling.classList.contains("arrow") ? document.querySelectorAll('.prevtext')[document.querySelectorAll('.prevtext').length - 1] : prevtextVis.previousElementSibling;
        const iItem = !previmgVis.previousElementSibling ? document.querySelectorAll('.previmg')[document.querySelectorAll('.previmg').length - 1] : previmgVis.previousElementSibling;
        prevtextVis.classList.add("hidden");
        tItem.classList.remove("hidden");
        previmgVis.classList.add("hidden");
        iItem.classList.remove("hidden");
    }
}
