
let start_btn = document.getElementById("start");
let stop_btn = document.getElementById("stop");

let timerBar = document.getElementById("timerBar")
let display = document.getElementById("timerDisplay")
let volume = document.getElementById("volume")
let music = document.getElementById("music");

// Start music
function play(){
    music.play();
    start_btn.style.display="none";
    stop_btn.style.display="block";

    time();
}

// Pause music
function pause(){
    music.pause();
    start_btn.style.display="block";
    stop_btn.style.display="none";
}

// forward music 10 seconds
function forward(){
    music.currentTime += 10;
}

// Backward music 10 seconds
function backward(){
    music.currentTime -= 10;
}

// Start music again
function again(){
    music.currentTime = 0;
}

function musicVolume(value){
    music.volume = value;
}

// Progress time bar
function progressBar(){
    timerBar.setAttribute('value', music.currentTime);
    timerBar.setAttribute('max', music.duration);
}

setInterval(progressBar, 1000)

// Fourward/backward music and progress bar
timerBar.addEventListener("input", function(event){
    music.currentTime = event.target.value;
    music.play()

    function resetProgressBar(){
        let value = timerBar.getAttribute('value');
        timerBar.value = value;
    }

    setInterval(resetProgressBar, 1000)
})

// Music time
function time(){

    let time = music.duration - music.currentTime;

    let hour = Math.round(time / 3600);
    let minutes = Math.floor((time - (hour * 3600)) / 60);
    let seconds = Math.round(time % 60);

    if(hour < 10){
        hour = "0" + hour;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    display.innerText = hour + ":" + minutes + ":" + seconds;
}

setInterval(time, 1000);