// Initialize EmailJS
// (function() {
//     emailjs.init("YOUR_PUBLIC_KEY"); // Remove EmailJS initialization
// })();

const quotesArr = [
    "I'm sorry for the misunderstanding. My heart aches without you.",
    "You mean the world to me, and I never want to lose you.",
    "My love for you is forever. Please forgive me.",
    "Every moment without you hurts. I want you in my life, always.",
    "I'm sorry, and I promise to cherish you for a lifetime.",
    // New quotes about understanding, forgiveness, and love without ego
    "True love is understanding, forgiving, and never letting ego come in between.",
    "A strong relationship is built on trust, understanding, and forgiveness.",
    "When love is real, ego disappears and hearts connect.",
    "Understanding each other is the key to a lifetime of happiness.",
    "Forgiveness is the fragrance that the violet sheds on the heel that has crushed it.",
    "Let's choose love over pride, always.",
    "In love, there's no place for ego, only room for understanding.",
    "I value our bond more than any misunderstanding or hurt.",
    "Love means saying sorry and meaning it, even when it's hard.",
    "I want us to grow stronger, together, with understanding and care."
];

const patchupQuotes = [
    "Every love story has its ups and downs, but ours will always have a happy ending.",
    "Thank you for giving us another chance. Together, we are unstoppable!",
    "Patch-ups make love stronger. I’m so grateful for you.",
    "Let’s make new memories and forget the pain. I love you!",
    "With you, every new beginning is beautiful.",
    "Our bond is unbreakable. Thank you for forgiving me.",
    "Love always finds a way back."
];

const loveYouQuotes = [
    "I love you more than words can say!",
    "Forever yours, forever us. ❤️",
    "You are my everything, my love!",
    "With you, every moment is special.",
    "My heart belongs to you, always.",
    "You complete me. Love you!",
    "Together is my favorite place to be."
];

const sadQuotes = [
    "Sometimes, the heart breaks silently.",
    "It hurts to say sorry when love feels lost.",
    "Broken hearts still hope for healing.",
    "Tears are words the heart can’t say.",
    "Even in sadness, love remains."
];

let quoteIndex = 0;
let currentQuotes = quotesArr;
let quoteInterval;
const quotesDiv = document.getElementById('quotes');
const mainMessage = document.querySelector('.main-message');

function showQuote(idx) {
    quotesDiv.style.opacity = 0;
    setTimeout(() => {
        quotesDiv.textContent = currentQuotes[idx];
        quotesDiv.style.opacity = 1;
    }, 700);
}

function startQuotes(quotes) {
    currentQuotes = quotes;
    quoteIndex = 0;
    showQuote(quoteIndex);
    if (quoteInterval) clearInterval(quoteInterval);
    quoteInterval = setInterval(() => {
        quoteIndex = (quoteIndex + 1) % currentQuotes.length;
        showQuote(quoteIndex);
    }, 3000);
}

startQuotes(quotesArr);

// Heart animation
const heartContainer = document.getElementById('heart-container');
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 95 + 'vw';
    heart.style.top = '100vh';
    heart.style.transform = `scale(${0.8 + Math.random() * 0.7})`;
    heart.style.opacity = 0.8 + Math.random() * 0.2;
    const heartShape = document.createElement('div');
    heartShape.className = 'heart-shape';
    heart.appendChild(heartShape);
    heartContainer.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 4000);
}
setInterval(createHeart, 350);

// Heart shower effect
function heartShower(count = 40) {
    for (let i = 0; i < count; i++) {
        setTimeout(createHeart, i * 40);
    }
}

// Sparkle animation
const sparkleContainer = document.getElementById('sparkle-container');
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = '100vh';
    sparkle.style.opacity = 0.5 + Math.random() * 0.5;
    sparkle.style.transform = `scale(${0.7 + Math.random() * 0.6})`;
    sparkleContainer.appendChild(sparkle);
    setTimeout(() => { sparkle.remove(); }, 2500);
}
setInterval(createSparkle, 200);

// Accept/Reject button logic
const acceptBtn = document.getElementById('accept-btn');
const rejectBtn = document.getElementById('reject-btn');

let rejectClickCount = 0;

function showCelebration() {
    const msg = document.getElementById('celebrate-message');
    msg.textContent = "We’re back together! 🎉";
    msg.classList.add('active');
    setTimeout(() => {
        msg.classList.remove('active');
    }, 2500);
}

function confettiPop() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const confettiCount = 80;
    const confetti = [];
    for (let i = 0; i < confettiCount; i++) {
        confetti.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            r: 6 + Math.random() * 6,
            d: Math.random() * 360,
            color: `hsl(${Math.random()*360},90%,60%)`,
            tilt: Math.random() * 10 - 5,
            tiltAngle: 0,
            speed: 4 + Math.random() * 4,
            angle: Math.random() * 2 * Math.PI
        });
    }
    let frame = 0;
    function drawConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach(c => {
            c.x += Math.cos(c.angle) * c.speed;
            c.y += Math.sin(c.angle) * c.speed + frame * 0.05;
            c.tiltAngle += 0.1;
            ctx.save();
            ctx.beginPath();
            ctx.ellipse(c.x, c.y, c.r, c.r/2, c.tiltAngle, 0, 2*Math.PI);
            ctx.fillStyle = c.color;
            ctx.fill();
            ctx.restore();
        });
        frame++;
        if (frame < 60) {
            requestAnimationFrame(drawConfetti);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    drawConfetti();
}

acceptBtn.addEventListener('click', () => {
    mainMessage.textContent = "Thank you for accepting my sorry! Let's make our love even stronger.";
    startQuotes(loveYouQuotes);
    rejectBtn.style.display = 'none';
    heartShower(50);
    showCelebration();
    confettiPop();
});

rejectBtn.addEventListener('click', (e) => {
    rejectClickCount++;
    // Move the button to a random position within the container, not overlapping acceptBtn
    const container = document.querySelector('.container');
    const btnWidth = rejectBtn.offsetWidth;
    const btnHeight = rejectBtn.offsetHeight;
    const acceptRect = acceptBtn.getBoundingClientRect();
    const contRect = container.getBoundingClientRect();
    let left, top, overlap;
    do {
        left = Math.random() * (contRect.width - btnWidth);
        top = Math.random() * (contRect.height - btnHeight - 60) + 60;
        // Calculate new position for rejectBtn relative to container
        const rejectRect = {
            left: contRect.left + left,
            right: contRect.left + left + btnWidth,
            top: contRect.top + top,
            bottom: contRect.top + top + btnHeight
        };
        // Check overlap with acceptBtn
        overlap = !(rejectRect.right < acceptRect.left ||
                    rejectRect.left > acceptRect.right ||
                    rejectRect.bottom < acceptRect.top ||
                    rejectRect.top > acceptRect.bottom);
    } while (left < 0 || top < 0 || overlap);
    rejectBtn.style.position = 'absolute';
    rejectBtn.style.left = left + 'px';
    rejectBtn.style.top = top + 'px';
    if (rejectClickCount <= 3) {
        alert("Don't say lie 😊❤️");
    } else if (rejectClickCount > 3) {
        mainMessage.textContent = "Sorry... 💔";
        startQuotes(sadQuotes);
    }
}); 