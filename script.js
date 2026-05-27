/* =========================
   BOTON ABRIR
========================= */

const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {

    const carta = document.getElementById("carta");

    carta.scrollIntoView({
        behavior: "smooth"
    });

});

/* =========================
   REVEAL ANIMATIONS
========================= */

const revealElements = document.querySelectorAll(
    ".letter-card, .counter-card, .song-card, .final-card"
);

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            element.style.opacity = "1";
            element.style.transform = "translateY(0px)";

        }

    });

};

revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "all 1s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* =========================
   PARALLAX SUAVE
========================= */

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    const heroContent = document.querySelector(".hero-content");

    heroContent.style.transform = `translateY(${scrollY * 0.15}px)`;

});

/* =========================
   CONTADOR ANIMADO
========================= */

const counter = document.getElementById("songCounter");

let start = 0;
let end = 3;

const counterAnimation = setInterval(() => {

    start++;

    counter.textContent = start;

    if(start >= end){

        clearInterval(counterAnimation);

    }

}, 400);

/* =========================
   ESTRELLAS DINAMICAS
========================= */

for(let i = 0; i < 40; i++){

    const star = document.createElement("div");

    star.classList.add("dynamic-star");

    document.body.appendChild(star);

    const size = Math.random() * 3 + "px";

    star.style.width = size;
    star.style.height = size;

    star.style.left = Math.random() * 100 + "vw";

    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDuration = (Math.random() * 4 + 3) + "s";

    star.style.animationDelay = Math.random() * 5 + "s";

}

/* =========================
   INYECTAR ESTILOS ESTRELLAS
========================= */

const style = document.createElement("style");

style.innerHTML = `

.dynamic-star{
    position:fixed;
    background:white;
    border-radius:50%;
    opacity:.4;
    pointer-events:none;
    z-index:-1;
    animation:twinkle infinite ease-in-out;
}

@keyframes twinkle{

    0%{
        opacity:.1;
        transform:scale(1);
    }

    50%{
        opacity:.8;
        transform:scale(1.8);
    }

    100%{
        opacity:.1;
        transform:scale(1);
    }

}

`;

document.head.appendChild(style);

/* =========================
   HOVER EFECTO TARJETAS
========================= */

const cards = document.querySelectorAll(".song-card");

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / 18) * -1;
        const rotateY = (x - centerX) / 18;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-6px)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0px)
        `;

    });

});

/* =========================
   EFECTO BOTON F1
========================= */

openBtn.addEventListener("mouseenter", () => {

    openBtn.style.letterSpacing = "2px";

});

openBtn.addEventListener("mouseleave", () => {

    openBtn.style.letterSpacing = "0px";

});

/* =========================
   TEXTO FINAL FADE
========================= */

const finalCard = document.querySelector(".final-card");

window.addEventListener("scroll", () => {

    const finalPosition = finalCard.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if(finalPosition < screenPosition){

        finalCard.style.opacity = "1";
        finalCard.style.transform = "translateY(0px)";

    }

});

/* =========================
   MICRO GLOW MOUSE
========================= */

document.addEventListener("mousemove", (e) => {

    let glow = document.querySelector(".mouse-glow");

    if(!glow){

        glow = document.createElement("div");

        glow.classList.add("mouse-glow");

        document.body.appendChild(glow);

        const glowStyle = document.createElement("style");

        glowStyle.innerHTML = `

        .mouse-glow{
            position:fixed;
            width:180px;
            height:180px;
            border-radius:50%;
            pointer-events:none;
            background:radial-gradient(
                circle,
                rgba(145,190,255,.12),
                transparent 70%
            );
            transform:translate(-50%, -50%);
            z-index:-1;
        }

        `;

        document.head.appendChild(glowStyle);

    }

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});
