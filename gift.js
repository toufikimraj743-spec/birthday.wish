// Page fade-in
window.onload = function () {
    document.body.style.opacity = "1";
};

// Camera Gift
function openCamera() {
    window.location.href = "camera.html";

    const gift = document.querySelectorAll(".gift")[0];
    gift.style.transform = "scale(1.3)";

    setTimeout(() => {
        // Change to your gallery page
        window.location.href = "gallery.html";
    }, 500);
}

// Bottle Gift
function openBottle() {

    const gift = document.querySelectorAll(".gift")[1];
    gift.style.transform = "scale(1.3)";

    setTimeout(() => {
        // Change to your love letter page
        window.location.href = "letter.html";
    }, 500);
}

// Star Gift
function openStar() {

    const gift = document.querySelectorAll(".gift")[2];
    gift.style.transform = "scale(1.3)";

    setTimeout(() => {
        // Change to your surprise page
        window.location.href = "music.html";
    }, 500);
}

// Floating hearts
const hearts = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("span");

    heart.innerHTML = "💖";

    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (18 + Math.random() * 18) + "px";
    heart.style.opacity = "0.8";
    heart.style.pointerEvents = "none";
    heart.style.transition = "all 6s linear";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.style.bottom = "110vh";
        heart.style.transform =
            "translateX(" + (Math.random() * 100 - 50) + "px)";
        heart.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, 6200);
}

// Create a heart every 500ms
setInterval(createHeart, 500);