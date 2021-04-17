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
let sumEquals = false;

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

function numbersAfterEquals(a) {
  if (sumEquals == true) {
    currentNum = "";
    num1 == "";
    num2 == "";
    operatorSymbol == "";
    display.placeholder = "";
    currentNum += a;
    displayMessage = "";
    displayMessage += a;
    calcDisplay();
    sumEquals = false;
    return;
  }
}

function calcButton(a) {
  currentNum += a;
  displayMessage = "";
  displayMessage += a;
  calcDisplay();
  numbersAfterEquals(a);
}

btn1.addEventListener("click", () => {
  calcButton(1);
});

btn2.addEventListener("click", () => {
  calcButton(2);
});

btn3.addEventListener("click", () => {
  calcButton(3);
});

btn4.addEventListener("click", () => {
  calcButton(4);
});

btn5.addEventListener("click", () => {
  calcButton(5);
});

btn6.addEventListener("click", () => {
  calcButton(6);
});

btn7.addEventListener("click", () => {
  calcButton(7);
});

btn8.addEventListener("click", () => {
  calcButton(8);
});

btn9.addEventListener("click", () => {
  calcButton(9);
});

btn0.addEventListener("click", () => {
  calcButton(0);
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
  sumEquals = true;
});

btnClear.addEventListener("click", () => {
  currentNum = "";
  num1 == "";
  num2 == "";
  operatorSymbol == "";
  display.placeholder = "";
});
