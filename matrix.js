// Get the canvas element
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Set canvas to full screen
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Characters to be used in the Matrix rain ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789
const characters = '01';
const charArray = characters.split('');

// Number of columns for the rain
const fontSize = 18;
const columns = canvas.width/fontSize;

// Array to store the position of each drop
const drops = [];

// Initialize drops
for(let x = 0; x < columns; x++) {
    drops[x] = 1;
}

// Drawing the characters
function draw() {
    // Black background with opacity
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Green text
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    // Drawing the characters
    for(let i = 0; i < drops.length; i++) {
        // Random character
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        // x = i*fontSize, y = drops[i]*fontSize
        ctx.fillText(text, i*fontSize, drops[i]*fontSize);
        
        // Sending the drop back to top randomly after it has crossed the screen
        // Adding randomness to the reset to make the drops scattered
        if(drops[i]*fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        
        // Increment y coordinate
        drops[i]++;
    }
}

// Handle window resize
window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    drops.length = Math.floor(canvas.width/fontSize);
    for(let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
});

// Run the animation
setInterval(draw, 33);