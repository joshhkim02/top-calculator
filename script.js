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
  }
  return result;
}

function clearAll() {
  firstNum = '';
  operator = '';
  secondNum = '';
  displayValue = '';
  displayText.textContent = '0';
}

// Calculator display variables
let firstNum = '';
let operator = '';
let secondNum = '';
let displayValue = '';

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

// Equals button
const btnEqualSelector = document.querySelector('.operation-equals');

btnEqualSelector.addEventListener('click', (event) => {
  if (firstNum === '' || operator === '') {
    alert(
      'You tried evaluating without the proper arguments/operators! Try again.'
    );
    clearAll();
  }
  secondNum = displayValue;
  let evaluation = operate(Number(firstNum), Number(secondNum), operator);
  console.log(evaluation);
  displayText.textContent = evaluation;
});

// Clear button
const btnClearSelector = document.querySelector('#clear');

btnClearSelector.addEventListener('click', clearAll);
