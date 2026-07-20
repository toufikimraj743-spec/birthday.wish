const cake = document.getElementById("cake");
const title = document.getElementById("title");
const blowBtn = document.getElementById("blowBtn");

blowBtn.addEventListener("click", () => {

    blowBtn.disabled = true;

    // After 0.5 second
    setTimeout(() => {
        cake.src = "images/candle22.png";
    }, 200);

    // After 1 second
    setTimeout(() => {
        cake.src = "images/candle33.png";
    }, 300);

    // After 1.5 seconds
    setTimeout(() => {
        cake.src = "images/candle44.png";

        title.innerHTML = "Happy Birthday My Love ❤️";
        blowBtn.style.display = "none";
    }, 400);

    // Open next page after 4 seconds
    setTimeout(() => {
        window.location.href = "gift.html";
    }, 2000);

});