function operate(first, second, operation) {
  let result;
  switch (operation) {
    case '+':
      result = add(first, second);
      break;
    case '-':
      result = subtract(first, second);
      break;
    case '*':
      result = multiply(first, second);
      break;
    case '/':
      result = divide(first, second);
      break;
    default:
      console.log('Incorrect input!');
      break;
  }
  return result;
}

// Calculator display variables
let firstNum;
let operator;
let secondNum;
let displayValue;

// Calculator functions
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

// Populate display when number buttons are clicked
const btnNumSelector = document.querySelectorAll('.number');

const displayText = document.querySelector('.calc-result');

btnNumSelector.forEach((item) => {
  item.addEventListener('click', (event) => {
    if (displayText.textContent === '0') {
      displayText.textContent = item.textContent;
      displayValue = displayText.textContent;
    } else {
      displayText.textContent += item.textContent;
      displayValue = displayText.textContent;
    }
  });
});

// Operation buttons
const btnOperatorSelector = document.querySelectorAll('.operation');

btnOperatorSelector.forEach((item) => {
  item.addEventListener('click', (event) => {
    firstNum = displayValue;
    operator = item.textContent;
    displayValue = '';
    displayText.textContent = '0';
  });
});

const btnEqualSelector = document.querySelector('.operation-equals');

btnEqualSelector.addEventListener('click', (event) => {
  secondNum = displayValue;
  let evaluation = operate(Number(firstNum), Number(secondNum), operator);
  console.log(evaluation);
  displayText.textContent = evaluation;
});
