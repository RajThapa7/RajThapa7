function myfunction(){
    let patt=/([a-z]|[A-Z])+\s*([a-z]|[A-Z])+\s*/g;
    let x= document.forms['myform']["fname"].value;
    if(!(patt.test(x))){
        alert("only letters are alllowed");
    }


}