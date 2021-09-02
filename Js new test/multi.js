var a=document.getElementById('first').value;
var b=document.getElementById('second').value;

function Add(){
     a=document.getElementById('first').value;
 b=document.getElementById('second').value;
    document.getElementById('output').innerHTML= Number(a)+Number(b);
}

function Sub(){
    var a=document.getElementById('first').value;
var b=document.getElementById('second').value;
    document.getElementById('output').innerHTML= a-b;
}
function Multi(){
    var a=document.getElementById('first').value;
var b=document.getElementById('second').value;
    document.getElementById('output').innerHTML= a*b;
 }
function Divide(){
    var a=document.getElementById('first').value;
var b=document.getElementById('second').value;
    document.getElementById('output').innerHTML= a/b;
    
}



