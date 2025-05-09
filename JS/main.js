document.addEventListener("DOMContentLoaded", () => {

    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual'; 
    }
    window.scrollTo(0, 0);


    const elements = document.querySelectorAll(".scroll");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
                entry.target.classList.add("showNormal");
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

    const loadElements = document.querySelectorAll(".scrollLoad");
    const observer3 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 1) {
                entry.target.classList.add("loadShow");
            }
        });
    }, { threshold: 1 });

    loadElements.forEach(loadElement => observer3.observe(loadElement));
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

document.querySelectorAll('.offCanvasBtn').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = this.getAttribute('href');
      const offcanvasEl = document.getElementById('offcanvasExample');
      const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
  
      if (offcanvas) {
        offcanvas.hide();
  
        offcanvasEl.addEventListener('hidden.bs.offcanvas', function handler() {
          offcanvasEl.removeEventListener('hidden.bs.offcanvas', handler);
          document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
        });
      }
    });
  });
  