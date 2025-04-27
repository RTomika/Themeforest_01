document.addEventListener("DOMContentLoaded", () => {

    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual'; 
    }
    window.scrollTo(0, 0);


    const elements = document.querySelectorAll(".scroll");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.6 });

    elements.forEach(element => observer.observe(element));


    const dropElements = document.querySelectorAll(".dropScroll");
    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 1) {
                entry.target.classList.add("dropShow");
            }
        });
    }, { threshold: 1 });

    dropElements.forEach(dropElement => observer2.observe(dropElement));
});

let section2 = document.querySelector(".section2");

section2.addEventListener("mousemove", function(e) {
    let x = e.pageX - section2.offsetLeft;
    let y = e.pageY - section2.offsetTop;

    section2.style.setProperty('--x', x + 'px');
    section2.style.setProperty('--y', y + 'px');
})

let cards = document.querySelectorAll('.cards');
cards.forEach(card => {
    card.onmousemove = function(e) {
        let cardX = e.pageX - card.offsetLeft;
        let cardY = e.pageY - card.offsetTop;

        card.style.setProperty('--cardX', cardX + 'px');
        card.style.setProperty('--cardY', cardY + 'px');
    }
})