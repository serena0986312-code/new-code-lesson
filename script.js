const heading = document.getElementById("mainHeading");
const paragraph = document.getElementById("mainParagraph");
const changeBtn = document.querySelector("#changeTextBtn");

changeBtn.addEventListener("click", function () {
  heading.textContent = "Hello JavaScript";
  paragraph.textContent = "DOM Manipulation is Easy!";
  heading.style.color = "blue";
});

const showMessageBtn = document.querySelector("#showMessageBtn");
const timeoutMessage = document.getElementById("timeoutMessage");

showMessageBtn.addEventListener("click", function () {
  timeoutMessage.textContent = "";

  setTimeout(function () {
    timeoutMessage.textContent = "Hello! 2 seconds completed.";
  }, 2000);
});

const counterValue = document.getElementById("counterValue");
const startCounterBtn = document.getElementById("startCounterBtn");
const stopCounterBtn = document.getElementById("stopCounterBtn");

let count = 0;
let intervalId = null;

startCounterBtn.addEventListener("click", function () {
  if (intervalId !== null) {
    return;
  }

  intervalId = setInterval(function () {
    count += 1;
    counterValue.textContent = count;
  }, 1000);
});

stopCounterBtn.addEventListener("click", function () {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
});

function greet(name, callback) {
  console.log("Hello " + name);
  callback(name);
}

function callbackFunction(name) {
  const callbackOutput = document.getElementById("callbackOutput");
  callbackOutput.innerHTML = "Hello " + name + "<br>Welcome to JavaScript";
}

greet("Amit", callbackFunction);
