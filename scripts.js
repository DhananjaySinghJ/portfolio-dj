document.addEventListener('DOMContentLoaded', function () {
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#00ff00" // Green color for particles
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000" // Black stroke
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#00ff00", // Green color for links
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });

});

// // Get all navigation links
// const navLinks = document.querySelectorAll('.nav-link');

// // Add click event listeners to each link
// navLinks.forEach(link => {
//     link.addEventListener('click', function() {
//         // Remove active class from all links
//         navLinks.forEach(l => l.classList.remove('active'));
//         // Add active class to clicked link
//         this.classList.add('active');
//     });
// });

// // Set About as active by default if no hash in URL
// window.addEventListener('load', function() {
//     const hash = window.location.hash;
//     if (!hash) {
//         const aboutLink = document.querySelector('a[href="./particles.html"]');
//         navLinks.forEach(l => l.classList.remove('active'));
//         aboutLink.classList.add('active');
//     } else {
//         const activeLink = document.querySelector(`a[href="${hash}"]`);
//         if (activeLink) {
//             navLinks.forEach(l => l.classList.remove('active'));
//             activeLink.classList.add('active');
//         }
//     }
// });