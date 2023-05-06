// The following variables hold the values for the timer.
let timerInterval;  // A reference to the timer interval.
let milliseconds = 0;  // The number of milliseconds elapsed.
let seconds = 0;  // The number of seconds elapsed.
let minutes = 0;  // The number of minutes elapsed.

// The following variables hold references to the HTML elements.
const timerElement = document.getElementById("timer");  // The timer element.
const startButton = document.getElementById("start");  // The start button element.
const stopButton = document.getElementById("stop");  // The stop button element.
const resetButton = document.getElementById("reset");  // The reset button element.

// The startTimer function is called when the start button is clicked.
function startTimer() {
  // The setInterval function is used to update the timer every 10 milliseconds.
  timerInterval = setInterval(() => {
    milliseconds += 10;  // Add 10 milliseconds to the elapsed time.

    // If the elapsed time is one second or more, add a second to the elapsed time.
    if (milliseconds === 1000) {
      milliseconds = 0;
      seconds++;
    }

    // If the elapsed time is one minute or more, add a minute to the elapsed time.
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    // Format the elapsed time into a string in the format "mm:ss:ms".
    const millisecondsString =
      milliseconds < 10 ? `00${milliseconds}` : milliseconds < 100 ? `0${milliseconds}` : milliseconds;
    const secondsString = seconds < 10 ? `0${seconds}` : seconds;
    const minutesString = minutes < 10 ? `0${minutes}` : minutes;

    // Update the timer element with the formatted elapsed time.
    timerElement.innerText = `${minutesString}:${secondsString}:${millisecondsString}`;
  }, 10);  // Call the update function every 10 milliseconds.
}

// The stopTimer function is called when the stop button is clicked.
function stopTimer() {
  clearInterval(timerInterval);  // Stop the timer by clearing the interval.
}

// The resetTimer function is called when the reset button is clicked.
function resetTimer() {
  clearInterval(timerInterval);  // Stop the timer by clearing the interval.
  milliseconds = 0;  // Reset the elapsed time to 0.
  seconds = 0;
  minutes = 0;
  timerElement.innerText = "00:00:00";  // Update the timer element with the reset value.
}

// Add event listeners to the start, stop, and reset buttons.
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
