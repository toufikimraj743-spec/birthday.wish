// ==============================
// Letter Page JavaScript
// ==============================

// Fade in page
window.addEventListener("load", () => {

    const card = document.querySelector(".card");

    card.style.opacity = "0";
    card.style.transform = "scale(0.95)";

    setTimeout(() => {
        card.style.transition = "all 0.8s ease";
        card.style.opacity = "1";
        card.style.transform = "scale(1)";
    }, 100);

});


// Next Button
function nextPage() {

    const btn = document.getElementById("nextBtn");

    btn.disabled = true;
    btn.innerHTML = "Loading...";

    btn.style.transform = "scale(0.95)";

    // Fade out animation
    const card = document.querySelector(".card");

    card.style.transition = "all .6s ease";
    card.style.opacity = "0";
    card.style.transform = "scale(.9)";

    setTimeout(() => {

        // Return to Gift Selection page
        window.location.href = "gift.html";

    }, 600);

}