

//DATA TYPE CHECKER//
let fruits=88;
document.write(check(fruits));
function check(d)
{
if (d.constructor.toString().indexOf("String")>-1)
{
return ("It is a String");
}
else if(d.constructor.toString().indexOf("Number")>-1){
    return("It is a Number")
}
else if (d.constructor.toString().indexOf("Array")>-1){
   return("It is a Array");
}
else if (d.constructor.toString().indexOf("Object")>-1){
    return("It is a Object");}
    else if (d.constructor.toString().indexOf("Boolean")>-1){
        return("It is a Boolean");}
        else{
            return("It is a date")
        }
      
    }

    
