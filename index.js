//variables used throughout
var firstNum = '0';
var secNum = '0';


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


//functions
function clear(){
    firstNum = '0';
    document.getElementsByClassName("display")[0].innerHTML = firstNum;
}
