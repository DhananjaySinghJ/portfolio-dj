// Particles.js Configuration
particlesJS("particles-js", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: "#00ff00",
        },
        shape: {
            type: "char",
            character: {
                value: ["0", "1"],
            },
        },
        opacity: {
            value: 0.7,
            random: true,
        },
        size: {
            value: 10,
            random: true,
        },
        line_linked: {
            enable: false,
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: "bottom",
            straight: true,
            out_mode: "out",
        },
    },
    interactivity: {
        events: {
            onhover: {
                enable: false,
            },
        },
    },
    retina_detect: true,
});

// GSAP Animation
gsap.from(".content h1", {
    duration: 2,
    opacity: 0,
    y: -50,
    ease: "power2.out",
});

// Anime.js Glitch Effect
anime({
    targets: ".content h1",
    translateX: [10, -10, 10, -10, 0],
    duration: 1000,
    loop: true,
    easing: "easeInOutSine",
});