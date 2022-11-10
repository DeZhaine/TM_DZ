var s = 1;
var start = new Audio();

start.src = "snd/whoosh.mp3"

addEventListener
document.addEventListener("click", mouseClick);

function mouseClick() {
    if (s > 1) {
        start.pause();
    } else {
        start.play();
        s++;
    }
}