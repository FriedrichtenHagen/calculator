function add(a, b){
    return a+b
}
function subtract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function divide(a,b){
    return a/b
}
function operate(operator, a, b){
    switch(operator){
        case "+": return add(a,b)
            break;
        case "-": return subtract(a,b)
            break;
        case "*": return multiply(a,b)
            break;
        case "/": return divide(a, b)
            break;
        default: console.log("not valid operator")
    }
}

const key1 = document.querySelector(".one");
const key2 = document.querySelector(".two");
const key3 = document.querySelector(".three")
const key4 = document.querySelector(".four")
const key5 = document.querySelector(".five")
const key6 = document.querySelector(".six")
const key7 = document.querySelector(".seven")
const key8 = document.querySelector(".eight")
const key9 = document.querySelector(".nine")
const key0 = document.querySelector(".zero")
const keyAdd = document.querySelector(".add")
const keySub = document.querySelector(".subtract")
const keyMul = document.querySelector(".multiply")
const keyDiv = document.querySelector(".divide")
const keyEqu = document.querySelector(".equals")
const keyCle = document.querySelector(".clear")
const outputField = document.querySelector(".outputField")
key1.addEventListener("click", e => fillField(e))
key2.addEventListener("click", e => fillField(e))
key3.addEventListener("click", e => fillField(e))
key4.addEventListener("click", e => fillField(e))
key5.addEventListener("click", e => fillField(e))
key6.addEventListener("click", e => fillField(e))
key7.addEventListener("click", e => fillField(e))
key8.addEventListener("click", e => fillField(e))
key9.addEventListener("click", e => fillField(e))
key0.addEventListener("click", e => fillField(e))
keyAdd.addEventListener("click", e => fillField(e))
keySub.addEventListener("click", e => fillField(e))
keyMul.addEventListener("click", e => fillField(e))
keyDiv.addEventListener("click", e => fillField(e))
keyEqu.addEventListener("click", e => fillField(e))
keyCle.addEventListener("click", e => clearInputField())

let displayValue = ""
function fillField(e){
    let currentValue = e.target.firstChild.nodeValue
    displayValue += currentValue
    outputField.textContent = displayValue
}

function clearInputField(){
    displayValue = ""
    outputField.textContent = displayValue
}
function splitString(){
    let splitString = displayValue.split("-",2)
    a = parseInt(splitString[0])
    b = parseInt(splitString[1])
    console.log(operate("-", a,b))
}