let firstNumber = 0;

let operator = "";

let secondNumber = 0;

const display = document.querySelector(".display");

const buttons = document.querySelectorAll("button");

function addOperation(a, b){
    return parseInt(a) + parseInt(b);
}

function subtractOperation(a, b){
    return parseInt(a) - parseInt(b);
}

function multiplyOperation(a, b){
    return parseInt(a) * parseInt(b);
}

function divideOperation(a, b){
    return parseInt(a) / parseInt(b);
}

function operate(){
    firstNumber = prompt("First number", 0);
    operator = prompt("Operator", "+");
    secondNumber = prompt("Second number", 0);

    if (operator === "+"){
        return addOperation(firstNumber, secondNumber)
    }
    else if (operator === "-"){
        return subtractOperation(firstNumber, secondNumber)
    } 
    else if (operator === "*"){
        return multiplyOperation(firstNumber, secondNumber)
    } 
    else {
        return divideOperation(firstNumber, secondNumber)
    } 
}

buttons.forEach(button => button.addEventListener("click", evaluateInput));

function evaluateInput(event) {
    const button = event.target;
    
    if(button.classList.contains('number')) {
        display.textContent = "Is number";
    } else {
        display.textContent = "NaN";
    }
}