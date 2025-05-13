let num1 = 8
let num2 = 8
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el") // first we need to get id from html

function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}

function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Substract: " + result
}

function divide() {
    let result = num1 / num2
    sumEl.textContent = "Division: " + result
}

function multiply() {
    let result = num1 * num2
    sumEl.textContent = "multiply: " + result
}

function pow() {
    if (num1 === num2) {
        let result = Math.pow(num1, num2);
        sumEl.textContent = "Power: " + result;
    } else {
        sumEl.textContent = "Power: not calculated – numbers are not equal";
        console.log("Error: num1 and num2 are not equal");
    }
}

function modulus() {
    let result = num1 % num2;
    sumEl.textContent = "Modulus: " + result;
}


function absolute() {
    let result = Math.abs(num1);
    sumEl.textContent = "Absolute: " + result;
}

function sqrt() {

    let result = Math.sqrt(num1);
    sumEl.textContent = "√" + num1 + " = " + result;
}



function exponent() {
    let result = Math.exp(num1);
    sumEl.textContent = "e^" + num1 + " = " + result;
}


function log10() {
    let result = Math.log10(num1);
    sumEl.textContent = "Log₁₀(" + num1 + ") = " + result;

}

function ln() {
    let result = Math.log(num1);
    sumEl.textContent = "ln(" + num1 + ") = " + result;
}
