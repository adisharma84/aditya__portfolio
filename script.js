// ===============================
// HERO INTRO ANIMATION
// ===============================

const tl = gsap.timeline();

tl.from(".navbar", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
})

.from(".small-text", {
    y: 30,
    opacity: 0,
    duration: 0.6
})

.from(".hero h1", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
}, "-=0.3")

.from(".description", {
    y: 30,
    opacity: 0,
    duration: 0.6
})

.from(".hero-button", {
    y: 30,
    opacity: 0,
    duration: 0.6
})

.from(".character", {
    x: 150,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
}, "-=1")

.from(".ticker", {
    y: 100,
    duration: 0.8,
    ease: "power3.out"
}, "-=0.6");


// ===============================
// IMAGE REVEAL
// ===============================

const character = document.querySelector(".character");
const aditya = document.querySelector(".aditya");

character.addEventListener("mousemove", (e) => {

    const rect = character.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    aditya.style.clipPath =
        `circle(120px at ${x}px ${y}px)`;

});

character.addEventListener("mouseleave", () => {

    aditya.style.clipPath =
        "circle(0px at 50% 50%)";

});


// ===============================
// BUTTON HOVER
// ===============================

const button = document.querySelector(".hero-button");

button.addEventListener("mouseenter", () => {

    gsap.to(button, {
        scale: 1.05,
        duration: 0.25
    });

});

button.addEventListener("mouseleave", () => {

    gsap.to(button, {
        scale: 1,
        duration: 0.25
    });

});


// ===============================
// HERO NAME ANIMATION
// ===============================

gsap.from(".hero h1", {
    y: 80,
    opacity: 0,
    duration: 1.2,
    delay: 0.4,
    ease: "power4.out"
});


const heroReveal = document.querySelector(".hero-reveal");
const heroName = document.querySelector(".hero-reveal h1");

heroReveal.addEventListener("mouseenter", () => {

    gsap.fromTo(
        heroName,
        {
            y: 80,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out"
        }
    );

});

heroReveal.addEventListener("mouseleave", () => {

    gsap.set(heroName, {
        y: 80,
        opacity: 0
    });

});
// =========================================
// BEHIND THE MASK - DROP ON SCROLL
// =========================================

gsap.registerPlugin(ScrollTrigger);

const aboutPhoto = document.querySelector(".about-photo");

if (aboutPhoto) {

    // Starting position
    gsap.set(aboutPhoto, {
        y: -300,
        opacity: 0
    });

    ScrollTrigger.create({
        trigger: ".about-section",
        start: "top 75%",

        onEnter: () => {

            gsap.to(aboutPhoto, {
                y: 0,
                opacity: 1,
                duration: 1.3,
                ease: "bounce.out",
                overwrite: true
            });

        },

        onLeaveBack: () => {

            gsap.set(aboutPhoto, {
                y: -300,
                opacity: 0
            });

        }
    });
}