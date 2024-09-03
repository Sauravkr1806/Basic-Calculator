let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('.buttons button');

let calculator = {
    display: '',
    firstNumber: '',
    operator: '',
    secondNumber: '',
    decimal: false
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.value) {
            case '=':
                calculate();
                break;
            case 'C':
                clear();
                break;
            case '.':
                addDecimal();
                break;
            case '^':
                setOperator('^');
                break;
            case 'sqrt':
                calculateSquareRoot();
                break;
            default:
                if (button.classList.contains('num')) {
                    appendNumber(button.value);
                } else if (button.classList.contains('operator')) {
                    setOperator(button.value);
                }
        }
    });
});

function appendNumber(number) {
    if (calculator.decimal) {
        calculator.display += number;
    } else {
        calculator.display = calculator.display === '0' ? number : calculator.display + number;
    }
    screen.value = calculator.display;
}

function setOperator(operator) {
    calculator.operator = operator;
    calculator.firstNumber = calculator.display;
    calculator.display = '';
    calculator.decimal = false;
    screen.value = '';
}

function addDecimal() {
    if (!calculator.decimal) {
        calculator.display += '.';
        calculator.decimal = true;
        screen.value = calculator.display;
    }
}

function calculate() {
    calculator.secondNumber = calculator.display;
    let result;
    switch (calculator.operator) {
        case '+':
            result = parseFloat(calculator.firstNumber) + parseFloat(calculator.secondNumber);
            break;
        case '-':
            result = parseFloat(calculator.firstNumber) - parseFloat(calculator.secondNumber);
            break;
        case '*':
            result = parseFloat(calculator.firstNumber) * parseFloat(calculator.secondNumber);
            break;
        case '/':
            result = parseFloat(calculator.firstNumber) / parseFloat(calculator.secondNumber);
            break;
        case '^':
            result = Math.pow(parseFloat(calculator.firstNumber), parseFloat(calculator.secondNumber));
            break;
    }
    screen.value = result;
    calculator.display = result;
    calculator.firstNumber = '';
    calculator.secondNumber = '';
    calculator.operator = '';
    calculator.decimal = false;
}

function calculateSquareRoot() {
    let result = Math.sqrt(parseFloat(calculator.display));
    screen.value = result;
    calculator.display = result;
    calculator.firstNumber = '';
    calculator.secondNumber = '';
    calculator.operator = '';
    calculator.decimal = false;
}

function clear() {
    calculator.display = '';
    calculator.firstNumber = '';
    calculator.secondNumber = '';
    calculator.operator = '';
    calculator.decimal = false;
    screen.value = '';
}