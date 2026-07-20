// Wait until the page is fully loaded
window.addEventListener("load", () => {

    // Hide the Next button initially
    const nextBtn = document.getElementById("nextBtn");
    nextBtn.style.opacity = "0";
    nextBtn.style.pointerEvents = "none";

    // Show the Next button after the photo animation finishes
    setTimeout(() => {
        nextBtn.style.transition = "0.6s";
        nextBtn.style.opacity = "1";
        nextBtn.style.pointerEvents = "auto";
    }, 2200);

});

// Next button function
function nextPage() {
    window.location.href = "gift.html";

    const btn = document.getElementById("nextBtn");

    // Button click animation
    btn.style.transform = "scale(0.95)";
    btn.innerHTML = "Loading...";

    setTimeout(() => {

        // Change this to your next page
        window.location.href = "bottle.html";

    }, 600);

}