var x = document.getElementById('first').value;
var y = document.getElementById('second').value;

console.log(x,y);

var result = 0

function add(){ 
    let x = Number(document.getElementById('first').value);
    let y = Number(document.getElementById('second').value);
    result = x+y;
    document.getElementById("result").innerHTML = result;
}
function subtract(){ 
    let x = Number(document.getElementById('first').value);
    let y = Number(document.getElementById('second').value);
    result = x-y;
    document.getElementById("result").innerHTML = result;
}
function multiply(){ 
    let x = Number(document.getElementById('first').value);
    let y = Number(document.getElementById('second').value);
    result = x*y;
    document.getElementById("result").innerHTML = result;
}
function divide(){ 
    let x = Number(document.getElementById('first').value);
    let y = Number(document.getElementById('second').value);
    result = x/y;
    document.getElementById("result").innerHTML = result;
}

console.log(result)

