function sum(a, b) {
  if (typeof(a) === "undefined" && typeof(b) === "undefined") {
    return 0
  } else if (typeof(b) === "undefined") {
    return a;
  } else {
    return a + b;
  }
}

function subtract(a, b) {
  if (typeof(a) === "undefined" && typeof(b) === "undefined") {
    return 0
  } else if (typeof(b) === "undefined") {
    return a;
  } else {
    return a - b;
  }
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('You cannot divide by zero');
  } else {
    return a / b;
  }
}

function multiply(a, b) {
  if (a > 0 && b > 0) {
    return a * b;
  } else if (a === 0 || b === 0) {
    return 0
  }
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
