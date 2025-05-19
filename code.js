let operator = "";
let valuePrev = "";
let valueNow = "";

document.addEventListener("DOMContentLoaded", function(){
    let displayNow = document.querySelector(".now");
    let displayPrev = document.querySelector(".prev");

    let clear = document.querySelector(".clear");
    let erase = document.querySelector(".erase");
    let dot = document.querySelector(".dot");
    let equal = document.querySelector(".equal");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent);
        displayNow.textContent = valueNow;
    }))

    operators.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent);
        displayPrev.textContent = valuePrev + " " + operator;
        displayNow.textContent = valueNow;
    }))

    clear.addEventListener("click", function(){
        valueNow = "";
        valuePrev = "";
        operator = "";
        displayNow.textContent = "";
        displayPrev.textContent = "";
    })

    equal.addEventListener("click", function(){
        calculate();
        displayPrev.textContent = "";
        if(valuePrev.length <= 5){
            displayNow.textContent = valuePrev;    
        } else{
            displayNow.textContent = valuePrev.slice(0,5) + "...";
        }
    })
});

function handleNumber(num){
    if(valueNow.length <= 5){
        valueNow += num;
    }
};

function handleOperator(op){
    operator = op;
    valuePrev = valueNow;
    valueNow = "";
}

function calculate(){
    valueNow = Number(valueNow);
    valuePrev = Number(valuePrev);

    if(operator === "+"){
        valuePrev += valueNow;
    } else if (operator === "-"){
        valuePrev -= valueNow;
    } else if (operator === "X"){
        valuePrev *= valueNow;
    } else if (operaror === "/"){
        valuePrev /= valueNow;
    }

    valuePrev = roundNumber(valuePrev);
    valuePrev = valuePrev.toString();
    valueNow = valuePrev.toString();
}

function roundNumber(num){
    return Math.round(num * 1000) / 1000;
}