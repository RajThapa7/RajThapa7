//promise does the same thing as the callbacks function but in a cleaner way
//creating a promise
// Promises are either resolved or rejected
//in promise you have two parameters ,resolve when success, reject when error
let myPromise = new Promise((resolve,reject)=>{
    let a = 1+1;
    if(a==2){
        resolve();
    }
    else{
        reject("Next time");
    }
});
//then will be called if our promise is resolved and the catch is called when our promise is rejectd
myPromise.then(()=> console.log("yo bitch"))
.catch((mesages)=>console.log(mesages))
//you can pass arguments in then and catch. They are the same parameters passed to resolve and reject
//Promise are useful for things that takes long time in the background like downloading an image and what to do 
//after it has been downloaded whether it succeds or fails 