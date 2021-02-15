
let timerBar = document.getElementById("timerBar")
let music = document.getElementById("music");


function forward(){
    music.currentTime += 10;
}

function backward(){
    music.currentTime -= 10;
}

function progressBar(){
    timerBar.setAttribute('value', music.currentTime);
    timerBar.setAttribute('max', music.duration);
}

setInterval(progressBar, 1000)

timerBar.addEventListener("click", function(event){
    music.currentTime = event.target.value;
})