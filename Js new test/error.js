function error(){
    let x,message;
    x=document.getElementById('numberValue').value;
    console.log(x);
    message=document.getElementById("mess");
    message.innerHTML="";
    try{
        if(x=="") throw "hey lazy bastard enter something";
        if(isNaN(x)) throw "You dumbass enter a number";
            if(x<1) throw "small like your pp";
            if(x>50) throw 'big like my pp'

        
    }
catch(err){
    message.innerHTML=err.name;
}

}
