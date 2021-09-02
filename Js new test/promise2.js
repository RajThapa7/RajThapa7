function participant(name,score){
    this.name = name;
    this.score = score;
}
let p1 = new participant("HArke",6);
let p2 = new participant("jharke",50);

function enrollment(participantID){
    return new Promise((resolve,reject)=>{
        if(participantID.score<40){
            reject();
            console.log("Sorry you are rejected");
        }
        else{
            resolve();
        }
    })
}

enrollment(p2).then(()=>{
    console.log("Congratulations you have been selected");
}).catch(()=>{
    console.log("Please try again next time");
})