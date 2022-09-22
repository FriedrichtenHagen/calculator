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

const key1 = document.querySelector("one")
const key2 = document.querySelector("two")
const key3 = document.querySelector("three")
const key4 = document.querySelector("four")
const key5 = document.querySelector("five")
const key6 = document.querySelector("six")
const key7 = document.querySelector("seven")
const key8 = document.querySelector("eight")
const key9 = document.querySelector("nine")
const key0 = document.querySelector("zero")
const keyAdd = document.querySelector("add")
const keySub = document.querySelector("subtract")
const keyMul = document.querySelector("multiply")
const keyDiv = document.querySelector("divide")
const keyEqu = document.querySelector("equals")
const keyCle = document.querySelector("clear")

