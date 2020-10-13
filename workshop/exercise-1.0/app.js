// Exercise 1.0
// ------------


const body = document.querySelector("body");
document.querySelector("body").addEventListener("click", textDisplay);

function textDisplay() {
  body.innerText = "You win!";
}
console.log('exercise-1');

