const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click",function(){

    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){

        themeToggle.innerHTML="🌞";

    }else{

        themeToggle.innerHTML="🌙";

    }

});
const header=document.querySelector("header");

window.addEventListener("scroll",function(){

    if(window.scrollY>40){

        header.style.boxShadow="0 10px 25px rgba(0,0,0,.35)";

    }else{

        header.style.boxShadow="0 2px 10px rgba(0,0,0,.3)";

    }

});
const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});
const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

    const update=()=>{

        const target=+counter.getAttribute("data-target");

        const current=+counter.innerText.replace("%","");

        const increment=target/100;

        if(current<target){

            counter.innerText=Math.ceil(current+increment);

            setTimeout(update,20);

        }else{

            if(target===100){

                counter.innerText="99.9%";

            }else if(target===50000){

                counter.innerText="50K+";

            }else{

                counter.innerText=target+"+";

            }

        }

    }

    update();

});
const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        if(scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});
document.querySelector(".get-started").addEventListener("click", function () {
    document.querySelector("#contact").scrollIntoView({
        behavior: "smooth"
    });
});
document.querySelectorAll(".primary-btn")[0].addEventListener("click", function () {
    document.querySelector("#contact").scrollIntoView({
        behavior: "smooth"
    });
});
document.querySelector(".secondary-btn").addEventListener("click", function () {

    alert(" Live demo coming soon!");

});
window.open("https://your-demo-link.com");
document.querySelectorAll(".primary-btn")[1].addEventListener("click", function () {

    document.querySelector("#contact").scrollIntoView({

        behavior:"smooth"

    });

});
document.querySelector("form").addEventListener("submit", function(event){

    event.preventDefault();

    alert("✅ Thank you! Your message has been received.");

    this.reset();

});
