function operate(firstNum, secondNum, operator) {
  let result;
  switch (operator) {
    case '+':
      result = add(firstNum, secondNum);
      break;
    case '-':
      result = subtract(firstNum, secondNum);
      break;
    case '*':
      result = multiply(firstNum, secondNum);
      break;
    case '/':
      result = divide(firstNum, secondNum);
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
const btnSelector = document.querySelectorAll('.number');

const displayText = document.querySelector('.calc-result');

btnSelector.forEach((item) => {
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
