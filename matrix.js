const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Set canvas to full screen
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Characters for the Matrix rain ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789
const characters = '01';
const charArray = characters.split('');

const fontSize = 18;
const columns = canvas.width/fontSize;

// Mouse position tracking
let mouse = {
    x: undefined,
    y: undefined,
    radius: 100 // Radius of influence
};

// Track mouse position
canvas.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

// Array for drops with x position
let drops = [];

// Initialize drops with both x and y positions and velocities
for(let i = 0; i < columns; i++) {
    drops[i] = {
        x: i * fontSize,
        y: Math.random() * canvas.height,
        velocity: Math.random() * 2 + 3,
        originalX: i * fontSize // Store original x position
    };
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    for(let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Calculate distance from mouse
        if (mouse.x && mouse.y) {
            const dx = mouse.x - drops[i].x;
            const dy = mouse.y - drops[i].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Apply repulsion effect
            if (distance < mouse.radius) {
                const angle = Math.atan2(dy, dx);
                const force = (mouse.radius - distance) / mouse.radius;
                
                // Push away from mouse
                drops[i].x -= Math.cos(angle) * force * 5;
                
                // Gradually return to original x position when far from mouse
                if (distance > mouse.radius * 0.8) {
                    drops[i].x += (drops[i].originalX - drops[i].x) * 0.1;
                }
            } else {
                // Return to original position when out of mouse radius
                drops[i].x += (drops[i].originalX - drops[i].x) * 0.1;
            }
        }

        // Draw character
        ctx.fillText(text, drops[i].x, drops[i].y);
        
        // Update y position with velocity
        drops[i].y += drops[i].velocity;

        // Reset drop to top when it reaches bottom
        if(drops[i].y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i].y = 0;
            drops[i].velocity = Math.random() * 2 + 3; // Randomize velocity on reset
        }
    }
}

// Handle window resize
window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    
    // Recalculate columns
    const newColumns = Math.floor(canvas.width/fontSize);
    
    // Reinitialize drops array with new width
    drops = [];
    for(let i = 0; i < newColumns; i++) {
        drops[i] = {
            x: i * fontSize,
            y: Math.random() * canvas.height,
            velocity: Math.random() * 2 + 3,
            originalX: i * fontSize
        };
    }
});

// Mouse out event to reset positions
canvas.addEventListener('mouseout', () => {
    mouse.x = undefined;
    mouse.y = undefined;
});

// Run the animation
setInterval(draw, 33);