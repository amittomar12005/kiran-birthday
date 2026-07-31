function openGift() {

document.getElementById("giftBox").style.display = "none";

document.getElementById("message").style.display = "block";
 document.getElementById("cake").style.display = "block";
 i = 0;
document.getElementById("typingText").innerHTML = "";
typeText();   
const music = document.getElementById("bgMusic");
music.play();
}

function showLetter() {

document.getElementById("message").style.display = "none";

document.getElementById("letter").style.display = "block";

}
setInterval(createHeart, 300);

function createHeart() {

const heart = document.createElement("div");

heart.className = "heart";

heart.innerHTML = "❤️";

heart.style.left = Math.random() * 100 + "vw";

heart.style.fontSize = (20 + Math.random() * 25) + "px";

document.getElementById("hearts").appendChild(heart);

setTimeout(() => {
heart.remove();
}, 6000);

}
const photos = [
"photo1.jpg",
"photo2.jpg",
"photo3.jpg",
"photo4.jpg",
"photo5.jpg",
"photo6.jpg",
"photo7.jpg",
"photo8.jpg",
"photo9.jpg"
];

let currentPhoto = 0;

function startSlideshow(){

document.getElementById("slideshow").style.display = "block";

setInterval(function(){

currentPhoto++;

if(currentPhoto >= photos.length){
currentPhoto = 0;
}

document.getElementById("slide").src = photos[currentPhoto];

},2500);

}

const oldOpenGift = openGift;

openGift = function(){

oldOpenGift();

startSlideshow();

};
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

function createFirework() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * (canvas.height / 2);

    for (let i = 0; i < 40; i++) {
        particles.push({
            x: x,
            y: y,
            dx: (Math.random() - 0.5) * 6,
            dy: (Math.random() - 0.5) * 6,
            life: 60
        });
    }
}

function animateFireworks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${Math.random() * 360},100%,60%)`;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;
        p.life--;

        if (p.life <= 0) {
            particles.splice(i, 1);
        }
    }

    requestAnimationFrame(animateFireworks);
}

setInterval(createFirework, 1200);
animateFireworks();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
const text = "Happy Birthday Kiran ❤️";
let i = 0;

function typeText() {
    if (i < text.length) {
        document.getElementById("typingText").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, 100);
    }
}
function createBalloon() {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.innerHTML = "🎈";
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.getElementById("balloons").appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 10000);
}

setInterval(createBalloon, 700);
