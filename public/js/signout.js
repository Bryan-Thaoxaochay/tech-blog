const signout = async () => {
    const response = await fetch('/api/users/signout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      alert(response.statusText);
    }
};
  
document.querySelector('#logout').addEventListener('click', signout);


const timeout = 60000;
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