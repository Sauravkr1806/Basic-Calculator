// Get the input screen element
const screen = document.getElementById('screen');

// Define a function to update the screen with the current calculation
function updateScreen(value) {
  screen.value = value;
}

// Define a function to perform calculations
function calculate() {
  const calculation = screen.value;
  try {
    const result = eval(calculation);
    updateScreen(result);
  } catch (error) {
    updateScreen('Error');
  }
}

// Define a function to handle parentheses
function handleParentheses(value) {
  const calculation = screen.value;
  if (value === '(') {
    updateScreen(calculation + '(');
  } else if (value === ')') {
    updateScreen(calculation + ')');
  }
}

// Define a function to handle percentage
function handlePercentage() {
  const calculation = screen.value;
  const num = parseFloat(calculation);
  updateScreen(num / 100);
}

// Define a function to handle exponentiation
function handleExponentiation() {
  const calculation = screen.value;
  const num = parseFloat(calculation);
  updateScreen(Math.pow(num, 2));
}

// Define a function to handle square root
function handleSquareRoot() {
  const calculation = screen.value;
  const num = parseFloat(calculation);
  updateScreen(Math.sqrt(num));
}

// Define a function to handle logarithm
function handleLogarithm() {
  const calculation = screen.value;
  const num = parseFloat(calculation);
  updateScreen(Math.log(num));
}

// Define a function to handle trigonometric functions
function handleTrigonometricFunctions(value) {
  const calculation = screen.value;
  const num = parseFloat(calculation);
  switch (value) {
    case 'sin':
      updateScreen(Math.sin(num));
      break;
    case 'cos':
      updateScreen(Math.cos(num));
      break;
    case 'tan':
      updateScreen(Math.tan(num));
      break;
  }
}

// Add event listeners to each button
document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', (event) => {
    const value = event.target.value;
    switch (value) {
      case 'C':
        updateScreen('');
        break;
      case '(':
      case ')':
        handleParentheses(value);
        break;
      case '%':
        handlePercentage();
        break;
      case '^':
        handleExponentiation();
        break;
      case 'sqrt':
        handleSquareRoot();
        break;
      case 'log':
        handleLogarithm();
        break;
      case 'sin':
      case 'cos':
      case 'tan':
        handleTrigonometricFunctions(value);
        break;
      case '=':
        calculate();
        break;
      default:
        updateScreen(screen.value + value);
    }
  });
});