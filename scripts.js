// Initialize Particles.js
document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#00ff00"
            },
            shape: {
                type: "char",
                character: {
                    value: ['1', '0'],
                    font: "Courier New",
                    style: "",
                    weight: "400"
                }
            },
            opacity: {
                value: 0.8,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 16,
                random: true,
                anim: {
                    enable: false,
                    speed: 10,
                    size_min: 8,
                    sync: false
                }
            },
            line_linked: {
                enable: false
            },
            move: {
                enable: true,
                speed: 3,
                direction: "bottom",
                random: false,
                straight: true,
                out_mode: "out",
                bounce: false,
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
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
});

// Add glitch effect to main title
function glitchEffect() {
    const titles = document.querySelectorAll('h1');
    titles.forEach(title => {
        setInterval(() => {
            const glitchText = title.textContent
                .split('')
                .map(char => {
                    if (Math.random() < 0.1) {
                        return String.fromCharCode(Math.random() * (127 - 33) + 33);
                    }
                    return char;
                })
                .join('');
            title.textContent = glitchText;
            
            setTimeout(() => {
                title.textContent = title.getAttribute('data-text') || title.textContent;
            }, 50);
        }, 2000);
    });
}

// Initialize glitch effect
document.addEventListener('DOMContentLoaded', () => {
    const titles = document.querySelectorAll('h1');
    titles.forEach(title => {
        title.setAttribute('data-text', title.textContent);
    });
    glitchEffect();
});