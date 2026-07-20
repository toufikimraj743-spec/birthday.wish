// Restart the birthday website
function restartWebsite() {
    window.location.href = "index.html";
}

// Fade-in animation when page loads
window.addEventListener("load", () => {
    const card = document.querySelector(".card");

    card.style.opacity = "0";
    card.style.transform = "scale(0.8)";

    setTimeout(() => {
        card.style.transition = "all 0.8s ease";
        card.style.opacity = "1";
        card.style.transform = "scale(1)";
    }, 100);
});

// Create floating hearts dynamically
const hearts = document.querySelector(".hearts");

setInterval(() => {
    const heart = document.createElement("span");

    const emojis = ["💖", "💕", "💗", "💓", "💝", "❤️"];
    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (18 + Math.random() * 20) + "px";
    heart.style.animationDuration = (6 + Math.random() * 5) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 11000);

}, 800);