// Exercise 2.1
// ------------

/**** CREATING AND APPENDING ****/
console.log("exercise 2.1");
let body = document.querySelector("body");
let header = document.createElement("div");
let startButton = document.createElement("div");

let gameZone = document.createElement("div");
let gameBoard = document.createElement("div");
let resultbtn = document.createElement("div");

body.appendChild(header);
header.appendChild(startButton);
body.appendChild(gameZone);
gameZone.appendChild(gameBoard);
gameBoard.appendChild(resultbtn);

/**** STYLING ****/
header.style.backgroundColor = "black";
header.style.width = "100vw";
header.style.height = "100px";
header.style.display = "flex";
header.style.alignItems = "center";
header.style.justifyContent = "center";

gameZone.style.backgroundColor = "white";
gameZone.style.height = "600px";
gameZone.style.display = "flex";
gameZone.style.alignItems = "center";
gameZone.style.justifyContent = "center";
gameZone.style.padding = "20px auto";

gameBoard.style.backgroundColor = "white";
gameBoard.style.position = "relative";
gameBoard.style.width = "700px";
gameBoard.style.height = "500px";
gameBoard.style.borderRadius = "20px";
gameBoard.style.boxShadow = "inset 0px 0px 22px -10px";

resultbtn.style.display = "none";
resultbtn.style.backgroundColor = "green";
resultbtn.style.position = "absolute";
resultbtn.style.width = "200px";
resultbtn.style.height = "80px";
resultbtn.style.border = "5px solid black";
resultbtn.style.borderRadius = "20px";
resultbtn.style.left = "50%";
resultbtn.style.marginLeft = "-100px";
resultbtn.style.top = "50%";
resultbtn.style.marginTop = "-40px";
resultbtn.style.zIndex = "999";
resultbtn.innerText = "You win!";
resultbtn.style.color = "white";
resultbtn.style.textAlign = "center";
resultbtn.style.textTransform = "uppercase";
resultbtn.style.fontSize = "30px";
resultbtn.style.fontWeight = "bold";
resultbtn.style.fontFamily = "sans-serif";
resultbtn.style.paddingTop = "40px";

startButton.style.backgroundColor = "yellow";
startButton.style.position = "absolute";
startButton.style.width = "100px";
startButton.style.height = "20px";
startButton.style.border = "5px solid white";
startButton.style.borderRadius = "6px";
startButton.style.zIndex = "999";
startButton.innerText = "Start";
startButton.style.color = "black";
startButton.style.textAlign = "center";
startButton.style.textTransform = "uppercase";
startButton.style.fontSize = "20px";
startButton.style.fontWeight = "bold";
startButton.style.fontFamily = "sans-serif";
startButton.style.padding = "10px 0";

/**** FUNCTIONS ****/
function getRandomPercent() {
  return Math.floor(Math.random() * Math.floor(90));
}

let getRandomNumber = Math.floor(Math.random() * Math.floor(10));

startButton.addEventListener("click", gameStart);
let timeleft = 5000;

function gameStart() {
  startButton.style.display = "none";

  let timerCountdown = document.createElement("div");
  header.appendChild(timerCountdown);

  timerCountdown.style.color = "white";
  timerCountdown.style.textTransform = "uppercase";
  timerCountdown.style.fontSize = "60px";
  timerCountdown.style.fontWeight = "bold";
  timerCountdown.style.fontFamily = "sans-serif";
  timerCountdown.innerText = timeleft / 1000;

  let countTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(countTimer);
      timerCountdown.innerText = "--";
    } else {
      timerCountdown.innerText = timeleft / 1000;
    }
    timeleft -= 1000;
  }, 1000);

  for (i = 1; i <= getRandomNumber + 1; i++) {
    let roundButton = document.createElement("span");
    roundButton.id = `roundButton_${i}`;
    roundButton.classList.add("roundbtns");
    roundButton.innerText = `${i}`;
    roundButton.style.width = "50px";
    roundButton.style.height = "50px";
    roundButton.style.display = "flex";
    roundButton.style.justifyContent = "center";
    roundButton.style.alignItems = "center";
    roundButton.style.position = "absolute";
    roundButton.style.color = "white";
    roundButton.style.borderRadius = "50%";
    roundButton.style.backgroundColor = "red";
    roundButton.style.border = "2px solid black";
    roundButton.style.fontSize = "25px";
    roundButton.style.fontWeight = "bold";
    roundButton.style.top = getRandomPercent() + "%";
    roundButton.style.left = getRandomPercent() + "%";
    roundButton.addEventListener("click", colorChange);
    gameBoard.appendChild(roundButton);
  }
}

let hasWon = false;
let timingOut = false;

function colorChange(ev) {
  let roundb = Array.from(document.querySelectorAll(".roundbtns"));

  if (ev.target.style.backgroundColor === "red") {
    ev.target.style.backgroundColor = "green";
    ev.target.style.border = "2px solid black";
  }

  let allclicked = roundb.every((element) => {
    if (element.style.backgroundColor === "green") {
      return true;
    }
  });
  if (timeleft > 0 && allclicked === true) {
    resultbtn.style.display = "block";
  }
  if (timeleft === 0 && allclicked === false) {
    resultbtn.style.display = "block";
    resultbtn.innerText = "You lose!";
    resultbtn.style.backgroundColor = "red";
  }
}