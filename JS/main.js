document.addEventListener("DOMContentLoaded", () => {

    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual'; 
    }
    window.scrollTo(0, 0);


    const elements = document.querySelectorAll(".scroll");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.7 });

    elements.forEach(element => observer.observe(element));
});

let section2 = document.querySelector(".section2");

section2.addEventListener("mousemove", function(e) {
    let x = e.pageX - section2.offsetLeft;
    let y = e.pageY - section2.offsetTop;

    section2.style.setProperty('--x', x + 'px');
    section2.style.setProperty('--y', y + 'px');
})

console.log(section2.parentElement)