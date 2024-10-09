// Get the input screen element
const screen = document.getElementById('screen');

// Get all the button elements
const buttons = document.querySelectorAll('button');

// Initialize the calculator state
let calculation = '';
let result = '';

// Factorial Function
function factorial(n){
    if(n < 0) return "Error";
    if(n == 0 || n == 1) return 1;
    return n * factorial(n-1);
}

// Add event listeners to each button
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // Prevent default action (such as form submission)
    e.preventDefault();

    const value = e.target.value;
    const className = e.target.className;

    // Handle clear button
    if (className === 'clear') {
      if (value === 'C') {
        calculation = '';
        result = '';
        screen.value = '';
      } else if (value === '(' || value === ')' || value === '%') {
        calculation += value;
        screen.value = calculation;
      }
    }
    // Handle number buttons
    else if (className === 'num') {
      calculation += value;
      screen.value = calculation;
    }
    // Handle arithmetic operator buttons
    else if (className === 'arithmetic') {
      if(value === '^'){
        calculation += '**';
      }
      else{
      calculation += value;
      }
      screen.value = calculation;
    }
    // Handle operator buttons (sqrt, log, sin, cos, tan)
    else if (className === 'operator') {
      if (value === 'sqrt') {
        calculation = `Math.sqrt(${calculation})`;
      } else if (value === 'log') {
        calculation = `Math.log(${calculation})`;
      } else if (value === 'sin') {
        calculation = `Math.sin(${calculation})`;
      } else if (value === 'cos') {
        calculation = `Math.cos(${calculation})`;
      } else if (value === 'tan') {
        calculation = `Math.tan(${calculation})`;
      } else if (value === '!'){
        result = factorial(parseFloat(calculation));
        screen.value = result;
        calculation = result.toString();
      }
      screen.value = calculation;
    }
    // Handle equals button
    else if (value === '=') {
      try {
        console.log("Calculation before eval: ", calculation);
        if(calculation.includes('%')){
          calculation = calculation.replace(/%/g, '/100');
        }
        result = eval(calculation);
        screen.value = result;
        calculation = result.toString();  // Clear the calculation after displaying the result
      } catch (error) {
        screen.value = 'Error';
        calculation = '';
      }
    }
  });
});

// Update the year in the footer
const yearElement = document.getElementById('year');
yearElement.textContent = `© ${new Date().getFullYear()}`;