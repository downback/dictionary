const rBtn = document.querySelector(".1btn");
const rVideo = document.querySelector("#r");
const gwiBtn = document.querySelector(".2btn");
const gwiVideo = document.querySelector("#gwi");
const bBtn = document.querySelector(".3btn");
const bVideo = document.querySelector("#b");
const gmBtn = document.querySelector(".4btn");
const gmVideo = document.querySelector("#gm");
const fBtn = document.querySelector(".5btn");
const fVideo = document.querySelector("#f");
const vBtn = document.querySelector(".6btn");
const vVideo = document.querySelector("#v");
const yBtn = document.querySelector(".7btn");
const yVideo = document.querySelector("#y");
const dBtn = document.querySelector(".8btn");
const dVideo = document.querySelector("#d");
const sBtn = document.querySelector(".9btn");
const sVideo = document.querySelector("#s");
const aBtn = document.querySelector(".10btn");
const aVideo = document.querySelector("#a");
const ysBtn = document.querySelector(".11btn");
const ysText = document.querySelector("#ys");

rBtn.addEventListener("mouseenter", function () {
    rVideo.classList.add("visible");
    rVideo.play();
    gwiVideo.classList.remove("visible");
    gwiVideo.pause();
    bVideo.classList.remove("visible");
    bVideo.pause();
    gmVideo.classList.remove("visible");
    gmVideo.pause();
    fVideo.classList.remove("visible");
    fVideo.pause();
    vVideo.classList.remove("visible");
    vVideo.pause();
    yVideo.classList.remove("visible");
    yVideo.pause();
    dVideo.classList.remove("visible");
    dVideo.pause();
    sVideo.classList.remove("visible");
    sVideo.pause();
    aVideo.classList.remove("visible");
    aVideo.pause();
    ysText.classList.remove("visible");
});


gwiBtn.addEventListener("mouseenter", function () {

});


bBtn.addEventListener("mouseenter", function () {

});

gmBtn.addEventListener("mouseenter", function () {

});


//itBtn.addEventListener("mouseleave", function () {
//    itVideo.classList.remove("visible");
//    itVideo.pause();
//});