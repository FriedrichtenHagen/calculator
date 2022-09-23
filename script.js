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
    a = parseInt(a)
    b = parseInt(b)
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
function showResult(){ 
    a = operate(currentOperator, a, b)
    resultField.textContent = a
    b= ""
    outputField.textContent = ""
    currentOperator = ""
    
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
const resultField = document.querySelector(".resultField")
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

keyAdd.addEventListener("click", e => saveOperator(e))
keySub.addEventListener("click", e => saveOperator(e))
keyMul.addEventListener("click", e => saveOperator(e))
keyDiv.addEventListener("click", e => saveOperator(e))

keyEqu.addEventListener("click", e =>showResult())
keyCle.addEventListener("click", e => clearInputFields())

let b = ""
let a = ""
let currentOperator= ""

function fillField(e){
    let currentValue = e.target.firstChild.nodeValue
    b += currentValue
    outputField.textContent = b
}

function clearInputFields(){
    b = ""
    outputField.textContent = b
    a = ""
    resultField.textContent = a
}

function saveOperator(e){
    currentOperator = e.target.firstChild.nodeValue
    console.log(e)
    switch(e.target.classList[1]){
        case "add": keyAdd.classList.add("currentOperator") 
        break;
        case "subtract": keySub.classList.toggle("currentOperator") 
        break;
    }
    if(a === ""){
        resultField.textContent = b
        a = b
        outputField.textContent = ""
        b = ""

        setTimeout(test => {
            switch(e.target.classList[1]){
                case "add": keyAdd.classList.remove("currentOperator") 
                break;
                case "subtract": keySub.classList.remove("currentOperator") 
                break;
            }
        }, 500)
    }
    else{
        // perform operation on added number  
        // a !== ""
        showResult()
        setTimeout(test => {
            switch(e.target.classList[1]){
                case "add": keyAdd.classList.remove("currentOperator") 
                break;
                case "subtract": keySub.classList.remove("currentOperator") 
                break;
            }
        }, 500)
    }

}



/* 
Todos:
rearrange the numbers and operators in html (copy real calculator)
display calculation in upper field
*/

/* 
on operator click: 
save operator as currentOperator
save first string as num1
set a = num1
(maybe let the operator button stay red)
clear outputField, b = 0
...enter further number
on equ click: 
save num2 = outputField
display: operate(currentOperator, num1, num2)






function splitString(){
    let splitString = b.split("-",2)
    a = parseInt(splitString[0])
    b = parseInt(splitString[1])
    a = operate("-", a,b)
    resultField.textContent = a
}

*/