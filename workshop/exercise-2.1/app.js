

let body = document.querySelector("body");
let btnDivContainer = document.createElement("div");
body.appendChild(btnDivContainer);
body.style.position = "relative";

btnDivContainer.style.width = "100%";
btnDivContainer.style.width = "100%";
btnDivContainer.style.position = "relative";
btnDivContainer.style.display = "flex";
btnDivContainer.style.flexWrap = "wrap";
btnDivContainer.style.alignItems = "flex-start";
btnDivContainer.style.justifyContent = "center";

for (i = 1; i <= 20; i++) {
  let button = document.createElement("span");
  button.id = `button_${i}`;
  button.innerText = `${i}`;
  button.style.width = "100px";
  button.style.height = "100px";
  button.style.display = "flex";
  button.style.justifyContent = "center";
  button.style.alignItems = "center";
  button.style.color = "white";
  button.style.backgroundColor = "red";
  button.style.border = "1px solid white";
  button.style.fontSize = "25px";
  button.style.fontWeight = "bold";
  button.addEventListener("click", colorChange);
  btnDivContainer.appendChild(button);
}

function colorChange(ev) {
  ev.target.style.backgroundColor = "green";
  ev.target.style.border = "1px solid black";
}

console.log("exercise 2.1");
