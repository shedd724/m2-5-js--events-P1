// Exercise 1.2
// ------------
console.log('exercise 1.2');

const body = document.querySelector("body");
const text = document.getElementById("result");
const timerMessage = document.getElementsByClassName("time-text")[0];
const timer = document.getElementById("time");
console.log(timerMessage);
body.style.background =
  "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(129,129,129,1) 50%, rgba(0,0,0,1) 100%)";
timerMessage.style.color = "white";
timerMessage.style.textTransform = "uppercase";
timerMessage.style.margin = "20px";
timerMessage.style.fontFamily = "sans-serif";
body.style.position = "relative";
text.style.display = "flex";
text.style.alignItems = "center";
text.style.justifyContent = "center";
text.style.height = "500px";
text.style.color = "orange";
text.style.fontSize = "50px";
text.style.textTransform = "uppercase";
text.style.fontFamily = "sans-serif";
text.style.fontWeight = "bold";

let hasWon = false;
let timingOut = false;
let timeLeft = Math.floor(Math.random() * 5);
timer.innerText = timeLeft;
console.log(timeLeft);
document.querySelector("body").addEventListener("click", textDisplay);

function textDisplay() {
  if (!timingOut) {
    hasWon = true;
    text.innerText = "You win!";
    console.log(text);
  }
}

function timeOut() {
  if (!hasWon) {
    timingOut = true;
    text.innerText = "You lose!";
    console.log(text);
  }
}

setTimeout(timeOut, timeLeft * 1000);