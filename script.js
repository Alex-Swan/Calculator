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
let currentNum;

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

calcDisplay();
