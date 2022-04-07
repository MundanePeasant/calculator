//variables used throughout
var firstNum = '0';
var secNum = '0';
var operator = '';


//event listenters
for(var i = 0; i < 10; i++){
    var node = document.getElementById(i);

    node.addEventListener("click", (e) => {
        if(firstNum === '0'){
            firstNum = e.target.id;
        }
        else{
            firstNum += e.target.id;           
        }

        document.getElementsByClassName("display")[0].innerHTML = firstNum;
    });
}

document.getElementById("clear").addEventListener("click", clear);

document.getElementById("enter").addEventListener("click", functionSelector);

document.getElementById("add").addEventListener("click", ()=> {
    functionSelector();
    secNum = firstNum;
    firstNum = '0';
    operator = 'add';
});

document.getElementById("subtract").addEventListener("click", ()=> {
    functionSelector();
    secNum = firstNum;
    firstNum = '0';
    operator = 'subtract';
});

document.getElementById("multiply").addEventListener("click", ()=> {
    functionSelector();
    secNum = firstNum;
    firstNum = '0';
    operator = 'multiply';
});

document.getElementById("divide").addEventListener("click", ()=> {
    functionSelector();
    secNum = firstNum;
    firstNum = '0';
    operator = 'divide';
});


//functions
function clear(){
    firstNum = '0';
    updateDisplay();
}

function updateDisplay(){
    document.getElementsByClassName("display")[0].innerHTML = firstNum;
}

function functionSelector(){
    if(operator == 'add'){
        add(secNum, firstNum);
    }
    else if(operator == 'subtract'){
        subtract(secNum, firstNum);
    }
    else if(operator == 'multiply'){
        multiply(secNum, firstNum);
    }
    else if(operator == 'divide'){
        divide(secNum, firstNum);
    }
}

function add(first, second){
    first = parseFloat(first);
    second = parseFloat(second);
    var fun = Math.round((first + second)*10.0) / 10.0;
    firstNum = fun.toString();
    secNum = '0';

    updateDisplay();
}

function subtract(first, second){
    //subtracts the two values
    first = parseFloat(first);
    second = parseFloat(second);
    var fun = Math.round((first - second)*10.0) / 10.0;
    parseFloat(first);
    firstNum = fun.toString();
    secNum = '0';

    updateDisplay();
}

function multiply(first, second){
    //adds the two values

    var fun = Math.round((parseFloat(first) * parseFloat(second)*10)) / 10;
    firstNum = fun.toString();
    secNum = '0';

    updateDisplay();
}

function divide(first, second){
    //adds the two values
    var fun = Math.round((parseFloat(first) / parseFloat(second)*10)) / 10;
    firstNum = fun.toString();
    secNum = '0';

    updateDisplay();
}