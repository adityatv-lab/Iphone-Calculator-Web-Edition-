
let display = document.getElementById('display');
let currentInput = '0';
let operator = null;
let previousInput = '';

function updateDisplay() {
  display.textContent = currentInput;
}

function appendNumber(number) {
  if (currentInput === '0' && number !== '.') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function appendOperator(op) {
  if (operator !== null) calculateResult();
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculateResult() {
  let result;
  let prev = parseFloat(previousInput);
  let curr = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(curr)) return;

  switch (operator) {
    case '+': result = prev + curr; break;
    case '-': result = prev - curr; break;
    case '*': result = prev * curr; break;
    case '/': result = prev / curr; break;
    case '%': result = prev % curr; break;
    default: return;
  }

  currentInput = result.toString();
  operator = null;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '0';
  previousInput = '';
  operator = null;
  updateDisplay();
}

function toggleSign() {
  currentInput = (parseFloat(currentInput) * -1).toString();
  updateDisplay();
}
