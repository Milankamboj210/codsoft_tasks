let nav=document.querySelector('nav');

window.addEventListener('scroll',()=>{
    nav.classList.toggle('naWinScroll',window.scrollY>0);
})
const img = document.querySelector(".header-right img");

img.addEventListener("mousemove",(e)=>{
    const x = e.offsetX/img.offsetWidth - 0.5;
    const y = e.offsetY/img.offsetHeight - 0.5;

    img.style.transform = `
        perspective(1000px)
        rotateY(${x*20}deg)
        rotateX(${-y*20}deg)
        scale(1.05)
    `;
});

img.addEventListener("mouseleave",()=>{
    img.style.transform="perspective(1000px) rotateY(0) rotateX(0)";
});
ScrollReveal({
    distance: "70px",
    duration: 1200,
    delay: 150,
    reset: false
});

ScrollReveal().reveal(".header-left", {
    origin: "left"
});

ScrollReveal().reveal(".header-right", {
    origin: "right"
});

ScrollReveal().reveal(".about-container", {
    origin: "bottom"
});

ScrollReveal().reveal(".about-article", {
    origin: "bottom",
    interval: 150
});

ScrollReveal().reveal(".services-article", {
    origin: "bottom",
    interval: 150
});

ScrollReveal().reveal(".skill-article", {
    origin: "bottom",
    interval: 100
});

ScrollReveal().reveal(".project-card", {
    origin: "bottom",
    interval: 150
});

ScrollReveal().reveal("form", {
    origin: "bottom"
});

ScrollReveal().reveal("footer", {
    origin: "bottom"
});
new Typed(".typing", {
    strings: [
        "Java Developer",
        "Frontend Developer",
        "Problem Solver",
        "Competitive Programmer"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true,
    showCursor: true,
    cursorChar: "|"
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
const skills = document.querySelectorAll(".skill-article");

skills.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const x=e.offsetX/card.offsetWidth-.5;

        const y=e.offsetY/card.offsetHeight-.5;

        card.style.transform=
        `perspective(900px)
        rotateY(${x*10}deg)
        rotateX(${-y*10}deg)
        translateY(-12px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="perspective(900px) rotateY(0) rotateX(0)";

    });

});
