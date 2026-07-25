/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1800);

});

/* ==========================================
   TYPING EFFECT
========================================== */

const words = [

    "Python Developer",

    "Java Developer",

    "Web Developer",

    "AI Enthusiast",

    "BCA Student"

];

let word = 0;
let letter = 0;
let deleting = false;

const typing = document.getElementById("typing");

function type() {

    let current = words[word];

    if (!deleting) {

        typing.textContent = current.substring(0, letter++);

        if (letter > current.length) {

            deleting = true;

            setTimeout(type, 1200);

            return;

        }

    } else {

        typing.textContent = current.substring(0, letter--);

        if (letter < 0) {

            deleting = false;

            word++;

            if (word >= words.length)

                word = 0;

        }

    }

    setTimeout(type, deleting ? 50 : 100);

}

type();

/* ==========================================
   WELCOME SCREEN + AI VOICE
========================================== */

const enterBtn = document.getElementById("enterBtn");
const welcome = document.getElementById("welcome");
const intro = document.getElementById("introAudio");

enterBtn.addEventListener("click", async () => {

    try {
        await intro.play();
    } catch (e) {
        console.log("Audio couldn't start automatically.", e);
    }

    welcome.style.opacity = "0";
    welcome.style.transform = "scale(1.05)";

    setTimeout(() => {

        welcome.style.display = "none";

    },700);

});

/* ==========================================
   MUSIC BUTTON
========================================== */

const musicBtn = document.getElementById("musicBtn");

let playing = true;

musicBtn.addEventListener("click", () => {

    if (playing) {

        intro.pause();

        musicBtn.innerHTML = "🔇";

        playing = false;

    }

    else {

        intro.play();

        musicBtn.innerHTML = "🎵";

        playing = true;

    }

});

/* ==========================================
   CURSOR GLOW
========================================== */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

/* ==========================================
   SCROLL TO TOP
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400)

        topBtn.style.display = "block";

    else

        topBtn.style.display = "none";

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

/* ==========================================
   NAVBAR EFFECT
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(0,0,0,.85)";

        header.style.boxShadow = "0 0 25px rgba(255,0,60,.3)";

    }

    else {

        header.style.background = "rgba(255,255,255,.05)";

        header.style.boxShadow = "none";

    }

});

/* ==========================================
   SCROLL REVEAL
========================================== */

const reveals = document.querySelectorAll(

".glass,.skill-card,.project-card,.contact form"

);

function reveal() {

    reveals.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            el.style.opacity = "1";

            el.style.transform = "translateY(0)";

        }

    });

}

reveals.forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(60px)";

    el.style.transition = ".8s";

});

window.addEventListener("scroll", reveal);

reveal();

/* ==========================================
   MOBILE MENU
========================================== */

const menu = document.querySelector(".menu");

const nav = document.querySelector("nav");

menu.addEventListener("click", () => {

    nav.classList.toggle("show");

});

/* ==========================================
   PROFILE FLOAT
========================================== */

const img = document.querySelector(".imageBox");

let y = 0;

let dir = 1;

setInterval(() => {

    y += dir;

    img.style.transform = `translateY(${y}px)`;

    if (y > 10) dir = -1;

    if (y < -10) dir = 1;

}, 70);

console.log("%cWelcome to Shreepad's Portfolio",
"color:#ff003c;font-size:22px;font-weight:bold");