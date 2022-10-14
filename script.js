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
    a = parseFloat(a*1)
    b = parseFloat(b*1)
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
const keyDel = document.querySelector(".delete")
const keyPoi = document.querySelector(".point")
const lowerField = document.querySelector(".lowerField")
const upperField = document.querySelector(".upperField")
key1.addEventListener("click", e => {
    currentValue = e.target.firstChild.nodeValue
    fillField(currentValue)})
key2.addEventListener("click", e => {
    currentValue = e.target.firstChild.nodeValue
    fillField(currentValue)})
key3.addEventListener("click", e => {
    currentValue = e.target.firstChild.nodeValue
    fillField(currentValue)})
key4.addEventListener("click", e => {
    currentValue = e.target.firstChild.nodeValue
    fillField(currentValue)})
key5.addEventListener("click", e => {
    currentValue = e.target.firstChild.nodeValue
    fillField(currentValue)})
key6.addEventListener("click", e => {
    currentValue = e.target.firstChild.nodeValue
    fillField(currentValue)})
key7.addEventListener("click", e => {
    currentValue = e.target.firstChild.nodeValue
    fillField(currentValue)})
key8.addEventListener("click", e => {
    currentValue = e.target.firstChild.nodeValue
    fillField(currentValue)})
key9.addEventListener("click", e => {
    currentValue = e.target.firstChild.nodeValue
    fillField(currentValue)})
key0.addEventListener("click", e => {
    currentValue = e.target.firstChild.nodeValue
    fillField(currentValue)})
keyPoi.addEventListener("click", e => {
    currentValue = e.target.firstChild.nodeValue
    fillField(currentValue)})

// variable 
let previousOperator = false;
keyAdd.addEventListener("click", e => { if(currentOperator !== ""){
                                            previousOperator = true // previous Operator exists
                                            showResult()
                                        } else{
                                            currentOperator = e.target.firstChild.nodeValue 
                                            addOperator(e)
                                        }
                                        })
keySub.addEventListener("click", e => { if(currentOperator !== ""){previousOperator = true}
                                        currentOperator = e.target.firstChild.nodeValue 
                                        addOperator(e)})
keyMul.addEventListener("click", e => { if(currentOperator !== ""){previousOperator = true}
                                        currentOperator = e.target.firstChild.nodeValue 
                                        addOperator(e)})
keyDiv.addEventListener("click", e => { if(currentOperator !== ""){previousOperator = true}
                                        currentOperator = e.target.firstChild.nodeValue 
                                        addOperator(e)})
keyDel.addEventListener("click", e => deleteNum(e))
keyEqu.addEventListener("click", e =>showResult())

keyCle.addEventListener("click", e => clearInputFields())
document.addEventListener("keydown", e => {
    console.log(e)
    if(e.key === "Backspace" && e.shiftKey === true){
        clearInputFields()
    }
    else{
        switch(e.key){
            case "Backspace": deleteNum();
                break; 
            case "Enter": showResult();
                break;  
            case "1": {currentValue = "1"
                        fillField()}
                break;
            case "2": {currentValue = "2"
                    fillField()}
                break;
            case "3": {currentValue = "3"
                    fillField()}
                break;
            case "4": {currentValue = "4"
                    fillField()}
                break;
            case "5": {currentValue = "5"
                    fillField()}
                break;
            case "6": {currentValue = "6"
                    fillField()}
                break;
            case "7": {currentValue = "7"
                    fillField()}
                break;
            case "8": {currentValue = "8"
                    fillField()}
                break;
            case "9": {currentValue = "9"
                    fillField()}
                 break;
            case "+": {currentOperator = "+"
                    addOperator("")}
                    break;
            case "-": {currentOperator = "-"
                    addOperator("")}
                    break;
            case "*": {currentOperator = "*"
                    addOperator("")}
                    break;
            case "/": {currentOperator = "/"
                    addOperator("")}
                    break;
        }
    }
})

let b = ""
let a = ""
let currentOperator= ""

function fillField(){
    if(currentValue === "." && b.includes(".")){
        alert("no double points idiot!")
    }
    else{
        b += currentValue
        lowerField.textContent = b
    }
}
function clearInputFields(){
    b = ""
    lowerField.textContent = b
    a = ""
    upperField.textContent = a
    result= ""
    currentOperator = ""
}

function addOperator(e){
    if(a === ""){
        // fill the upper field because it is empty
        upperField.textContent = b + currentOperator
        a = b
        lowerField.textContent = ""
        b = ""
    }
    else if(previousOperator){
        //chaining several operations
        if(currentOperator === "/" && b === "0"){
            alert("You can't divide by zero, stupid!")
        }
        else if(a==="" || b==="" || currentOperator === ""){
            alert("you're missing something there bud")
        }
        else{
            result = operate(currentOperator, a, b)
            result = Math.round(result*1000000)/1000000 //round float to 6 decimal places
            upperField.textContent = result + currentOperator
            lowerField.textContent = ""
            a = result
            b = ""
        }
    }
    else{
        // perform operation on added number  
        // a !== ""
        // a === result
        //
        result = "" // reset result
        a = b   // move result of previos calculation to a (upper)
        upperField.textContent = a + currentOperator
        lowerField.textContent = ""
        b = ""
    }
    
}
let result = ""
function showResult(){ 
    if(currentOperator === "/" && b === "0"){
        alert("You can't divide by zero, stupid!")
    }
    else if(a==="" || b==="" || currentOperator === ""){
        alert("you're missing something there bud")
    }
    else{
        result = operate(currentOperator, a, b)
        result = Math.round(result*1000000)/1000000 //round float to 6 decimal places
        upperField.textContent = a + currentOperator + b + "="
        lowerField.textContent = result
       /* if(operation button was pressed){

        }*/

        currentOperator = ""
        b = result
    }
}
function deleteNum(){
    b = b.toString().slice(0,-1)
    lowerField.textContent = b
}

/* 
Todos:
    - calculations should be able to be strung together without using equals


    - make the eventlisteners and queryselectors simpler
    */

