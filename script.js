const buttonEl = document.getElementById("button");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
let minutes = Number(minutesEl.innerText);
let seconds = Number(secondsEl.innerText);
let isTimerActive = false;

function start() {
  isTimerActive = true;
  updateButtonEl();
  startTimer();
}

function stop() {
  isTimerActive = false;
  updateButtonEl();
  stopTimer();
}

function updateButtonEl() {
  isTimerActive
    ? (buttonEl.innerHTML = "STOP")
    : (buttonEl.innerHTML = "START");
}

function handleStartStop() {
  return isTimerActive ? stop() : start();
}

buttonEl.addEventListener("click", handleStartStop);

function decreaseTime() {
  seconds -= 1;
  if (seconds < 0) {
    minutes -= 1;
    seconds = 59;
  }
  if (seconds <= 0 && minutes <= 0) {
    stopTimer();
    alert("HEY! Your task is completed!");
  }
  updateTimerEl(minutes, seconds);
}

function updateTimerEl() {
  minutesEl.innerText = String(minutes).padStart(2, "0");
  secondsEl.innerText = String(seconds).padStart(2, "0");
}

let intervalId;

function startTimer() {
  intervalId = setInterval(decreaseTime, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
}
