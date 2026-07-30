function openGift() {

document.getElementById("giftBox").style.display = "none";

document.getElementById("message").style.display = "block";

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
