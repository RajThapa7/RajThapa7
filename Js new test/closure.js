//Closures are nothing but FUNCTIONS WITH PRESERVED DATA"
var addTo = function(passed){
    var add = function(inner){
        return passed + inner;
    };
    return add;
}
//When we do this we can see a new function with the parameter(inner) is formed called add(inner) so the value 3 is
// a closure as we dont need to pass it. only the inner param needs to be passed 
console.log(addTo(3));

//here we created two new functions with closures 3 and 4 and with only inner parameteres to be passed
let addThree = new addTo(3);
let addFour = new addTo(4);

console.log(addThree(4));//3+4
console.log(addFour(4));//4+4

// so by using closures we can create as many functions we like by passing a closure value and then the new
//function will only have to be passed with one function

