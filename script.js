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
const lowerField = document.querySelector(".lowerField")
const upperField = document.querySelector(".upperField")
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

keyAdd.addEventListener("click", e => addOperator(e))
keySub.addEventListener("click", e => addOperator(e))
keyMul.addEventListener("click", e => addOperator(e))
keyDiv.addEventListener("click", e => addOperator(e))

keyEqu.addEventListener("click", e =>showResult())
keyCle.addEventListener("click", e => clearInputFields())

let b = ""
let a = ""
let currentOperator= ""

function fillField(e){
    let currentValue = e.target.firstChild.nodeValue
    b += currentValue
    lowerField.textContent = b
}
function clearInputFields(){
    b = ""
    lowerField.textContent = b
    a = ""
    upperField.textContent = a
}

function addOperator(e){
    currentOperator = e.target.firstChild.nodeValue
    console.log(e)

    if(a === ""){
        upperField.textContent = b + currentOperator
        a = b
        lowerField.textContent = ""
        b = ""
    }
    else{
        // perform operation on added number  
        // a !== ""
        // a === result
        //
        upperField.textContent = a + currentOperator
        lowerField.textContent = ""
        b = ""
    }
}
function showResult(){ 
    let result = operate(currentOperator, a, b)
    upperField.textContent = a + currentOperator + b + "="
    lowerField.textContent = result
    currentOperator = ""
    a = result
}

/* 
Todos:
rearrange the numbers and operators in html (copy real calculator)
display calculation in upper field
*/

/* 

upperField
lowerField
a
b
currentOperator


1: add (a)number plus operator to upperField
2: enter (b)
3: equals: upperField: axb= 
            lowerField: result

4: new operator: upperF : result-
                    lower: b
5: equals: upperF: a-b
            lowerF: result



*/