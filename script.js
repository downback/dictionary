const fingerBtn = document.querySelector(".finger");
const fingerVideo = document.querySelector(".fussfinger");
const vorBtn = document.querySelector(".vor");
const vorVideo = document.querySelector(".vorne");
const itBtn = document.querySelector(".it");
const itVideo = document.querySelector(".gender");
const fleischBtn = document.querySelector(".fleisch");
const fleischVideo = document.querySelector(".fruchtfleisch");

fingerBtn.addEventListener("mouseenter", function () {
    fingerVideo.classList.add("visible");
    fingerVideo.play();
    vorVideo.classList.remove("visible");
    vorVideo.pause();
    itVideo.classList.remove("visible");
    itVideo.pause();
    fleischVideo.classList.remove("visible");
    fleischVideo.pause();
});


vorBtn.addEventListener("mouseenter", function () {
    vorVideo.classList.add("visible");
    vorVideo.play();
    fingerVideo.classList.remove("visible");
    fingerVideo.pause();
    itVideo.classList.remove("visible");
    itVideo.pause();
    fleischVideo.classList.remove("visible");
    fleischVideo.pause();
});


itBtn.addEventListener("mouseenter", function () {
    itVideo.classList.add("visible");
    itVideo.play();
    fingerVideo.classList.remove("visible");
    fingerVideo.pause();
    vorVideo.classList.remove("visible");
    vorVideo.pause();
    fleischVideo.classList.remove("visible");
    fleischVideo.pause();
});

fleischBtn.addEventListener("mouseenter", function () {
    fleischVideo.classList.add("visible");
    fleischVideo.play();
    fingerVideo.classList.remove("visible");
    fingerVideo.pause();
    vorVideo.classList.remove("visible");
    vorVideo.pause();
    itVideo.classList.remove("visible");
    itVideo.pause();
});


//itBtn.addEventListener("mouseleave", function () {
//    itVideo.classList.remove("visible");
//    itVideo.pause();
//});