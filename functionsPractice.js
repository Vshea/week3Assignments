//// 1. Write a function called speakFriend that takes one parameter. 
//// Return the string "Access Denied". But, if the passed in value is "Mellon", return "Enter"

// ar fs = require("fs");
// var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
// var a = input[0];


//write your code below
function speakFriend(a){
    if(a == "Mellon"){
        return "Enter";
    } 
    return "Access Denied";
}


//do not change below
// console.log(speakFriend(a));


/// In this case, we start by labeling the first function. In this case it is speakFriend.
/// function speakFriend
/// Because it only has one parameter, we only need to list a.
/// function speakFriend(a)
/// Begin new curly bracket. Start if-statement. ('But, if the passed in value is "Mellon", return "Enter"')
/// a is the passed in value. 
// if(a == "Mellon"){
//      return "Enter";
//(' Return the string "Access Denied") So we'll finish this off with return "Access Denied"; and end curly brackets.

// Note: A function will end once returned. Anything after will be ignored and the function will exit.






//// 2. Create a function named checkout that accepts 2 variables named cardBalance and price.
//// If the price is more than the card balance, return false. Otherwise, return the new card balance.


// var fs = require("fs");
// var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
// var a = parseInt(input[0]);
// var b = parseInt(input[1]);


//write your code below

function checkout(cardBalance, price){
    if(price > cardBalance) { return false; }
    else { return cardBalance - price; }
}


//do not change below, used for testing purposes
// console.log(checkout(a,b,40));


/// Like before, we start with labeling the function. function checkout
/// Follow it with the variables. function checkout(cardBalance, price)
/// Begin curly bracket. Launch if statement. ("If the price is more than the card balance, return false.")
/// if(price > cardBalance) { return false; }
/// Finally we address this part: "Otherwise, return the new card balance"
/// We do this by writing: else { return cardBalance - price; }
/// The reason we do cardBalance - price is because we are subtracting the price from the cardBalance.
/// Be sure to end curly brackets.






//// 3. Create a function called isBlue. It takes one parameter. 
//// Return true if it is passed "blue", otherwise return false.
//// The passed value can be "blue" with any of the letters capitalized as well. (i.e."Blue", "bLue", "BLUE", etc…) 
//// All forms of the word blue should return true. 
//// Use toLowerCase() on the passed value to accomplish this. 
//// For example, myVariable.toLowerCase() will convert whatever myVariable is to all lowercase.



// var fs = require("fs");
//var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
//var a = input[0];


//write your code below
function isBlue(var1){
    return var1.toLowerCase() === "blue";
}


//do not change below, used for testing purposes
// console.log(isBlue(a));


/// Here we start again by labeling the function isBlue.
///  It's taking one parameter, so in parentheses we'll label that parameter as var1. 
/// Begin curly brackets.
/// Write return, but since we want all case types to be useable (uppercase, lowercase), we'll enter this:
/// return var1.toLowerCase()
/// because that will change whatever is entered to lowercase, regardless of what they typed. 
/// then we set it equal to "blue". We'll use 3 = signs because we want it to be the same type of data as well.
/// semi colon, end curly brackets.





//// 4. Write a function called sumOfTwo that takes two numbers as parameters and returns the sum.

// var fs = require("fs");
// var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
// var a = parseInt(input[0]);
// var b = parseInt(input[1]);

//write your code below

function sumOfTwo(a, b){
    return (a + b);
}


//do not change. Used for Testing purposes
// console.log(sumOfTwo(a, b))




//// 5. Write a function called loopUntilX that takes one parameter. 
//// Within the function, write a loop that loops as many times as the passed in value, starting at 0. 
//// Within the loop, print the number of iterations to the console. Once the loop is done, return true.


// var fs = require("fs");
// var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
// var x = input[0];


//write your code below
function loopUntilX(x){
    for(let i = 0; i < x; i++){
        console.log(i);
    }
    return true;
}

//do not change below, used for testing purposes
// console.log(loopUntilX(x));


/// x is the passed in value, meaning this value is unknown and any could be entered. 




//// 6. Create a function named returnSum that accepts 3 integer variables named num1, num2, and num3.
////  Return the sum of the three variables.


// var fs = require("fs");
// var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
// var a = parseInt(input[0]);
// var b = parseInt(input[1]);
// var c = parseInt(input[2]);


//write your code below

function returnSum(num1, num2, num3){
    return(num1 + num2 + num3)
}


//do not change below, used for testing purposes
// console.log(returnSum(a,b,c));

//// 7. Create a function called findCircumference that returns the circumference of a circle if given the radius.
//// The formula to find the circumference of a circle is PI * 2r where r is the radius.


// var fs = require("fs");
// var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
// var a = parseInt(input[0]);


//write your code below

function findCircumference(radius){
    return Math.PI * (2 * radius);
}


//do not change below, used for testing purposes
// console.log(findCircumference(a));

/// As usual, start with function and label it. In the parentheses this time we're going to enter radius. Continue as usual.
/// For the return, we'll use the object "Math.PI" because we're entering a math problem that uses Pi. Pi * (2 * radius) 
/// is how you get 2r(Pi).





