// Fade in animation
window.onload = function () {
    document.body.style.opacity = "1";
};

// Open the next page when the button is clicked
function showPicture() {

    // Button animation
    const btn = document.getElementById("pictureBtn");

    btn.innerHTML = "📸 Taking Picture...";
    btn.style.transform = "scale(0.95)";

    // Camera flash effect
    document.body.style.background = "white";

    setTimeout(() => {
        document.body.style.background = "linear-gradient(to bottom,#fff6f8,#ffeef3)";
    }, 150);

    // Open photo page after animation
    setTimeout(() => {
        window.location.href = "photo.html";
    }, 1000);

}