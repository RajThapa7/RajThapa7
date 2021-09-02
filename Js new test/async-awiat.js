// the async keyword is added to functions to tell them to return a promise rather than directly returning the value.
// await can be used in front of async based function to pause your code on that line until the promise fulfills and return value
console.log("first");
async function hello(){
    return greeting =  new Promise((resolve,reject)=>{
        resolve("hello");

    })
}
hello().then((msg)=>console.log(msg))
console.log("second");