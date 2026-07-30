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
