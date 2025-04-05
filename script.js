let minutes = 0,
    seconds = 0,
    milliseconds = 0;
let timer;
let running = false;

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");
const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");
const lapsContainer = document.getElementById("laps");

function startStop() {
    if (running) {
        clearInterval(timer);
        startStopButton.textContent = "Start";
        running = false;
    } else {
        timer = setInterval(updateStopwatch, 10);
        startStopButton.textContent = "Pause";
        running = true;
    }
}

function updateStopwatch() {
    milliseconds++;
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    displayTime();
}

function resetStopwatch() {
    clearInterval(timer);
    minutes = seconds = milliseconds = 0;
    displayTime();
    startStopButton.textContent = "Start";
    running = false;
    lapsContainer.innerHTML = "";
}

function displayTime() {
    minutesDisplay.textContent = minutes.toString().padStart(2, '0');
    secondsDisplay.textContent = seconds.toString().padStart(2, '0');
    millisecondsDisplay.textContent = milliseconds.toString().padStart(2, '0');
}

function recordLap() {
    if (running) {
        let lapTime = `${minutesDisplay.textContent}:${secondsDisplay.textContent}:${millisecondsDisplay.textContent}`;
        let lapItem = document.createElement("li");
        lapItem.textContent = `Lap ${lapsContainer.children.length + 1}: ${lapTime}`;
        lapsContainer.appendChild(lapItem);
    }
}

startStopButton.addEventListener("click", startStop);
resetButton.addEventListener("click", resetStopwatch);
lapButton.addEventListener("click", recordLap);