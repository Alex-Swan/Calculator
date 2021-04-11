let display = document.getElementById("display");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn0 = document.getElementById("btn0");

const btnAdd = document.getElementById("btnAdd");
const btnSubtract = document.getElementById("btnSubtract");
const btnMultiply = document.getElementById("btnMultiply");
const btnDivide = document.getElementById("btnDivide");
const btnEquals = document.getElementById("btnEquals");
const btnClear = document.getElementById("btnClear");

let displayMessage = "";
let currentNum = "";
let num1;
let num2;
let operatorSymbol;
let answer;

// Simple add, subtract, multiply and divide sum function's.
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(a, b, c) {
  if (a == "+") {
    return add(b, c);
  } else if (a == "-") {
    return subtract(b, c);
  } else if (a == "*") {
    return multiply(b, c);
  } else if (a == "/") {
    return divide(b, c);
  }
}

function calcDisplay() {
  display.placeholder += displayMessage;
}

btn1.addEventListener("click", () => {
  currentNum += "1";
  displayMessage = "";
  displayMessage += "1";
  calcDisplay();
});

btn2.addEventListener("click", () => {
  currentNum += `2`;
  displayMessage = "";
  displayMessage += `2`;
  calcDisplay();
});

btn3.addEventListener("click", () => {
  currentNum += `3`;
  displayMessage = "";
  displayMessage += `3`;
  calcDisplay();
});

btn4.addEventListener("click", () => {
  currentNum += `4`;
  displayMessage = "";
  displayMessage += `4`;
  calcDisplay();
});

btn5.addEventListener("click", () => {
  currentNum += `5`;
  displayMessage = "";
  displayMessage += `5`;
  calcDisplay();
});

btn6.addEventListener("click", () => {
  currentNum += `6`;
  displayMessage = "";
  displayMessage += `6`;
  calcDisplay();
});

btn7.addEventListener("click", () => {
  currentNum += `7`;
  displayMessage = "";
  displayMessage += `7`;
  calcDisplay();
});

btn8.addEventListener("click", () => {
  currentNum += `8`;
  displayMessage = "";
  displayMessage += `8`;
  calcDisplay();
});

btn9.addEventListener("click", () => {
  currentNum += `9`;
  displayMessage = "";
  displayMessage += `9`;
  calcDisplay();
});

btn0.addEventListener("click", () => {
  currentNum += `0`;
  displayMessage = "";
  displayMessage += `0`;
  calcDisplay();
});

btnAdd.addEventListener("click", () => {
  num1 = parseInt(currentNum);
  console.log(num1);
  currentNum = "";
  display.placeholder = "";
  operatorSymbol = "+";
  console.log(operatorSymbol);
});

btnSubtract.addEventListener("click", () => {
  num1 = parseInt(currentNum);
  console.log(num1);
  currentNum = "";
  display.placeholder = "";
  operatorSymbol = "-";
  console.log(operatorSymbol);
});

btnMultiply.addEventListener("click", () => {
  num1 = parseInt(currentNum);
  console.log(num1);
  currentNum = "";
  display.placeholder = "";
  operatorSymbol = "*";
  console.log(operatorSymbol);
});

btnDivide.addEventListener("click", () => {
  num1 = parseInt(currentNum);
  console.log(num1);
  currentNum = "";
  display.placeholder = "";
  operatorSymbol = "/";
  console.log(operatorSymbol);
});

btnEquals.addEventListener("click", () => {
  num2 = parseInt(currentNum);
  console.log(num2);
  answer = operate(operatorSymbol, num1, num2);
  currentNum = "";
  display.placeholder = "";
  displayMessage = answer;
  calcDisplay();
  console.log(answer);
});
