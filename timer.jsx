let timerInterval;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

const timerElement = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

function startTimer() {
  timerInterval = setInterval(() => {
    milliseconds += 10;

    if (milliseconds === 1000) {
      milliseconds = 0;
      seconds++;
    }

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    const millisecondsString =
      milliseconds < 10 ? `00${milliseconds}` : milliseconds < 100 ? `0${milliseconds}` : milliseconds;
    const secondsString = seconds < 10 ? `0${seconds}` : seconds;
    const minutesString = minutes < 10 ? `0${minutes}` : minutes;

    timerElement.innerText = `${minutesString}:${secondsString}:${millisecondsString}`;
  }, 10);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  timerElement.innerText = "00:00:00";
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);