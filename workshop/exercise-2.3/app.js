// Exercise 2.3
// ------------
console.log("exercise 2.2");
let body = document.querySelector("body");
let btnDivContainer = document.createElement("div");
body.appendChild(btnDivContainer);
body.style.position = "relative";

btnDivContainer.style.width = "100%";
btnDivContainer.style.height = "500px";
btnDivContainer.style.position = "relative";
// btnDivContainer.style.display = "flex";
// btnDivContainer.style.flexWrap = "wrap";
// btnDivContainer.style.alignItems = "flex-start";
// btnDivContainer.style.justifyContent = "center";

function getRandomPercent() {
  return Math.floor(Math.random() * Math.floor(91));
}

for (i = 1; i <= 20; i++) {
  let button = document.createElement("span");
  button.id = `button_${i}`;
  button.innerText = `${i}`;
  button.style.width = "50px";
  button.style.height = "50px";
  button.style.display = "flex";
  button.style.justifyContent = "center";
  button.style.alignItems = "center";
  button.style.position = "absolute";
  button.style.color = "white";
  button.style.borderRadius = "50%";
  button.style.backgroundColor = "red";
  button.style.border = "1px solid white";
  button.style.fontSize = "25px";
  button.style.fontWeight = "bold";
  button.style.top = getRandomPercent() + "vh";
  button.style.left = getRandomPercent() + "vw";
  button.addEventListener("click", colorChange);
  btnDivContainer.appendChild(button);
}

function colorChange(ev) {
  if (ev.target.style.backgroundColor === "red") {
    ev.target.style.backgroundColor = "green";
    ev.target.style.border = "1px solid black";
  } else {
    ev.target.style.backgroundColor = "red";
    ev.target.style.border = "1px solid white";
  }
}