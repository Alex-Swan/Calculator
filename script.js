let display;

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
  if (b == "+") {
    return add(a, c);
  } else if (b == "-") {
    return subtract(a, c);
  } else if (b == "*") {
    return multiply(a, c);
  } else if (b == "/") {
    return divide(a, c);
  }
}
