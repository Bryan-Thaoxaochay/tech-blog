const signout = require('./signout');

const timeout = 3000;
let timeoutId;

const startTimer = () => {
  timeoutId = window.setTimeout(signout, timeout);
}

const resetTimer = () => {
  window.clearTimeout();
  startTimer();
}

const idleTimer = () => {
  document.addEventListener("mousemove", resetTimer, false);
  document.addEventListener("mousedown", resetTimer, false);
  document.addEventListener("keypress", resetTimer, false);
  document.addEventListener("touchmove", resetTimer, false);
   
  startTimer();
}

idleTimer();