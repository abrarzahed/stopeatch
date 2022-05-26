// selections
let [milliSeconds, seconds, minutes, hours] = [0, 0, 0, 0];
const timeRef = document.querySelector(".display");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

let init;

// start watch
start.addEventListener("click", () => {
  init = setInterval(displayTimer, 10);
});

// pause watch
pause.addEventListener("click", () => {
  clearInterval(init);
});

// reset watch
reset.addEventListener("click", () => {
  clearInterval(init);
  [milliSeconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timeRef.innerHTML = `00 : 00 : 00 : 000`;
});

const displayTimer = () => {
  milliSeconds += 10;
  if (milliSeconds == 1000) {
    milliSeconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  h = hours < 10 ? `0${hours}` : hours;
  m = minutes < 10 ? `0${minutes}` : minutes;
  s = seconds < 10 ? `0${seconds}` : seconds;
  ms =
    milliSeconds < 10
      ? `00${milliSeconds}`
      : milliSeconds < 100
      ? `0${milliSeconds}`
      : milliSeconds;
  timeRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
};
