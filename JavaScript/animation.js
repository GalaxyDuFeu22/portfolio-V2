const loadingScreen = document.getElementById("loading");

window.addEventListener('load', () => {
    loadingScreen.style.display = "none";
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const scrollToTop = document.getElementById("top-arrow")

window.addEventListener("scroll", function(){
    if(window.pageYOffset>300) {
        scrollToTop.style.opacity="0.5";
        scrollToTop.style.transform="translateY(0)";
    } else {
        scrollToTop.style.opacity="0";
        scrollToTop.style.transform="translateY(150%)";
    }
});

scrollToTop.addEventListener("mouseover", function(){
     scrollToTop.style.opacity="1";
     scrollToTop.style.cursor="pointer";
     
});

scrollToTop.addEventListener("mouseout", function(){
    scrollToTop.style.opacity="0.5";
});

scrollToTop.addEventListener("click", function(){
    window.scrollTo({
        top:0
    });
});