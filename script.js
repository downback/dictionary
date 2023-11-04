const fingerBtn = document.querySelector(".finger");
const fingerVideo = document.querySelector(".fussfinger");
const vorBtn = document.querySelector(".vor");
const vorVideo = document.querySelector(".vorne");
const itBtn = document.querySelector(".it");
const itVideo = document.querySelector(".gender");

fingerBtn.addEventListener("mouseenter", function () {
    fingerVideo.classList.add("visible");
    fingerVideo.play();
});

fingerBtn.addEventListener("mouseleave", function () {
    fingerVideo.classList.remove("visible");
    fingerVideo.pause();
});

vorBtn.addEventListener("mouseenter", function () {
    vorVideo.classList.add("visible");
    vorVideo.play();
});

vorBtn.addEventListener("mouseleave", function () {
    vorVideo.classList.remove("visible");
    vorVideo.pause();
});

itBtn.addEventListener("mouseenter", function () {
    itVideo.classList.add("visible");
    itVideo.play();
});

itBtn.addEventListener("mouseleave", function () {
    itVideo.classList.remove("visible");
    itVideo.pause();
});