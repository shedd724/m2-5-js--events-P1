// Exercise 1.1
// ------------


const body = document.querySelector("body");
const text = document.getElementById("result");
const message = document.createElement("h1");
body.appendChild(message);
body.style.background =
  "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(129,129,129,1) 50%, rgba(0,0,0,1) 100%)";
message.style.color = "white";
message.style.textTransform = "uppercase";
message.style.margin = "20px";
let hasWon = false;
let timingOut = false;
body.style.position = "relative";
text.style.position = "absolute";
text.style.top = "60px";
text.style.left = "20px";
message.innerText = "Be a quicker clicker!";
text.style.color = "orange";
text.style.fontSize = "50px";
text.style.textTransform = "uppercase";
text.style.fontFamily = "sans-serif";
text.style.fontWeight = "bold";

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

setTimeout(timeOut, 1000);
console.log('exercise 1.1');
