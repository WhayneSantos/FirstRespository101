let currentInput = '';       // the number you are typing
let previousInput = '';      // the first number
let currentOperation = '';   // + - * /

function appendNumber(num) { //number
    currentInput += num;
    updateDisplay();
}

function appendOperation(op) { //operator
    if (currentInput === '') return; // can't choose + if no number typed

    previousInput = currentInput; // save first number
    currentInput = '';            // clear for second number
    currentOperation = op;        // store operator

    updateDisplay(); //update base on what number you clicked
}

function calculate() {
    if (previousInput === '' || currentInput === '' || currentOperation === '') return;

    const prev = parseFloat(previousInput);  //converts a string into a decimal number.
    const current = parseFloat(currentInput);  
    let result;

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) { //return if dividing by zero
                alert("Cannot divide by zero");
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    let result1 = result;
    result1++

    previousInput = `I dont know maybe ${result} or ${result1}`;  
    currentInput = '';
    currentOperation = '';

    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").value =
        `${previousInput} ${currentOperation} ${currentInput}`.trim();
}