function attendMeet(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve("Report before 9:30AM and attend the meet");
        },1000)
    });
}

function task(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve("Study and Implement the Task");
        },1100)
    });
}

function lunchBreak(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve("Have your lunch!");
        },1200)
    });
}

function reportEnd(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve("Complete your task and report by submitting your work in group");
        },1200)
    });
}

attendMeet().then(value =>{console.log(value); return task()})
.then(value =>{console.log(value); return lunchBreak()})
.then(value =>{console.log(value); console.log("You have completed you todays task successfully");})