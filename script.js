// To show the numbers when they are pressed.
// To activate the numpad.
const numbers = document.querySelectorAll('.number')
numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        inputNumber(event.target.value)
        updateScreen(currentInput)
    })
})
// To Display the numbers on the calculator screen.
const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = ((number) => {
    calculatorScreen.value = number
})
// prevInput stores first pressed number.
// CurrentInput stores second pressed number.
// Calculation Operator is the operator.
let prevInput = "0";
let currentInput = "0";
let calculationOpertor = '';
// Else it would display '0' and then the leading numbers.
const inputNumber = (number) => {
    if(currentInput === '0'){
        currentInput = number
    } else{
        currentInput += number
    }
}
// Function the operators.
const operators = document.querySelectorAll('.operator')
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        inputOperator(event.target.value)
    })
})
// Assign currentInput to prevInput
const inputOperator = (operator) => {
    prevInput = currentInput;
    calculationOperator = operator;
    currentInput = "0";
}
// Enable to calculate numbers
const equals = document.querySelector('.equals')
equals.addEventListener('click', () => {
    calculate()
    updateScreen(currentInput)
})
// Calculate the numbers.
const calculate = () => {
    let result = 0
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevInput) + parseFloat(currentInput)
            break;
        case '-':
            result = parseFloat(prevInput) - parseFloat(currentInput)
            break;
        case '*':
            result = parseFloat(prevInput) * parseFloat(currentInput)
            break;
        case '/':
            result = parseFloat(prevInput) / parseFloat(currentInput)
            break;
        case '%':
            result = parseFloat(prevInput) % parseFloat(currentInput)
            break;
        default:
            return;
    }
    // To store the result.
    currentInput = result.toString()
    calculationOpertor = ''
}
// AC button
const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener ('click', () => {
    clearAll()
    updateScreen(currentInput)
})
const clearAll = () => {
    prevInput = "0";
    calculationOpertor = '';
    currentInput = "0";
}
//  '%'
const getpercentage = () => {
    currentInput = currentInput/100;
} 

const percentage = document.querySelector('.percentage')
percentage.addEventListener('click', () => {
    getpercentage()
    updateScreen(currentInput)
})
// Decimal
const getdecimal = (dot) => {
    if(currentInput==='.'){
        currentInput +=dot
    }else{
        if(currentInput.indexOf('.'===-1)){
            currentInput += dot
        }
    }
}
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', () => {
    getdecimal(event.target.value)
    updateScreen(currentInput)
})


// Decimal problem
// Recurring problem