let array1 = [1, 5, 6, 9, 10, 14];

// print the 3rd element in array1

console.log (array1 [2]);


// print the second to last element in array1

console.log(array1[array1.length-2]);

// add 16 and 3 to array1

array1.push(16,3);

// sort the array, then print the 3rd element again
// did it change? Yes

 array1.sort();
 console.log(array1[2]);

// create a variable called myTodoList that holds an empty array

let myToDoList = [];

// add three todo items to the array using a built-in array method
myToDoList.push("go to store","take a walk","pick up meds");

// remove the second item in the array
myToDoList.splice[1,1];
console.log (myToDoList);
// create another array, yourTodoList, and add two todo items

let yourTodoList = ["go to work", "buy yogurt"];

// create another array, ourTodoList
let ourTodoList = [];

// combine myTodoList and yourTodoList into ourTodoList
ourTodoList = [...myToDoList, ...yourTodoList, "go to meeting"];
console.log (ourTodoList);

// sort the following array from Z-A
ourTodoList.sort();





// **************** HAD TROUBLE WITH THIS ONE ************
// create a function called reverse that takes in parameter
// this function will return the opposite of whatever is passed in
// if its a boolean, return the opposite
// if its a number, or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN)
// if its an array, return the reversed array with each element reversed
function reverse(x);
 if(typeof(x) === "boolean"){
    return !x;
 } else if(typeof(x) === "number" || typeof(x) === "string"){
    let splitX = x.split("");
    // console.log(splitX);

    let reverseX = splitX.reverse();
    // console.log(reverseX);

    let rejoinX = reverseX.join("");
   // console.log(rejoinX);

    return rejoinX;

} else {
    console.log("Passed argument must be a boolean, string, or number");
}


 //// Start with function, title it reverse, use x to take one parameter.
 //// start if statement. If the type of parameter (typeof(x)) is a boolean (=== "boolean"), then return opposite of x ({reterun !x;})

// create a function called addingMachine that will add all passed numbers and return the total
// Note: you don't know how many numbers will be passed
function addingMachine(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        let number = arguments[i];
        
        sum += number;
        
    } 
    return sum;

}


// You just signed a contract as an estimator for a restoration company. 
// Your contract states that you take home 10% of the profits on the first $100,000
// 20% on the next $400,000
// 35% on the next $500,000
// 40% on all profits above $1,000,000
// create a function that will allow you to check how much of a bonus you make
// the function should take in two variables as arguments, grossInvoiced and profitMargin
