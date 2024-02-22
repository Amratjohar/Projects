console.log("This is the code for hoisting concept in javascript");

hoisting()
console.log(a);

 var a=10;  //undefined and declaration hoisted to the top but initialization is not hoisted

function hoisting() {
    console.log("Hoisting function");
}

//function and class expression doesnt get hoisted in javascript

//let a=10; // Cannot access 'a' before initialization

// let and const give not defined