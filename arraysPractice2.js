////1. Given the array, studentList, remove the name "Eddie". 
//// Do not edit the array in its current state. You must edit using a method of the Array object.

// var fs = require("fs");
// var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
// var a = parseInt(input[0]);



// let studentList = ["Allen", "Jessica", "Eddie", "Sarah"]
//write your code here

studentList.splice(2,1);



// do not change
// for testing purposes
//function checkArray(array){
//    return array.sort()
//}

//console.log(checkArray(studentList));








////2. Write a function called joinArrays that accepts two arrays as arguments. Join the two arrays and return the new array.
////You must use a method of the Array object

//var fs = require("fs");
//var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
//var staticArray = ["Henry", "Peter", "Julie"];

//write your code here

function joinArrays(array1, array2){
    let newArray = array1.concat(array2);
    return newArray;
}



// do not change
// for testing purposes

//console.log(joinArrays(input, staticArray));









////3. Given the attendanceList array, replace the first element in the array with "Steven"
////Remember, arrays are 0 base index, meaning the first element is in position 0. For example, array[0] accesses the first element.

//var fs = require("fs");
//var attendanceList = [];

// This line will add the test cases to the array
// attendanceList = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");


//write your code here
attendanceList[0] = "Steven";



// this will print the result
//console.log(attendanceList);








////4. Using the given function, gradList, add the following names to the passed array: Mary, Steven, Eddie. 
//// Sort the remaining students from Z-A.
//// The passed array is the graduates variable. First add the names to the graduates array using push. 
//// Then sort the names and finally return the reversed array.


// var fs = require("fs");
// var grads = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");

// function gradList(graduates){
    //write your code here
    graduates.push("Mary", "Steven", "Eddie");
    graduates.sort();
    let reverseGrads = graduates.reverse();
    return reverseGrads;
//}


//console.log(gradList(grads));








////5. Write a function called sortArray that accepts an array as an argument. 
//// Within the function, sort the array alphabetically or numerically. Return the sorted array.
//// You must use a method of the Array object

//var fs = require("fs");
//var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");


//write your code here

function sortArray(array){
    return array.sort();
}



// do not change
// for testing purposes

//console.log(sortArray(input));








////6. Create an array called groceryList and add "granola", "milk", and "eggs"

//var fs = require("fs");
//var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
//var a = parseInt(input[0]);

//write your code here



let groceryList = ["granola", "milk", "eggs"];


// do not change below
// for testing purposes
//console.log(groceryList)







////7. Given the array, studentList, add the name "Mary".
//// Do not edit the array in its current state. You must edit using a method of the Array object.


//var fs = require("fs");
//var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
//var a = parseInt(input[0]);



//let studentList = ["Allen", "Jessica", "Eddie", "Sarah"]
//write your code here

studentList.push("Mary")


// do not change
// for testing purposes
//function checkArray(){
//    return studentList.sort()
//}

//console.log(checkArray());







////8. Write a function called printArray that accepts an array as an argument. 
//// Create a loop that will print each value of the passed in array.
////Do not edit the array in its current state. You must use a method of the Array object.

//var fs = require("fs");
//var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");

//write your code here

function printArray(array){
    for(let i=0; i < array.length; i++){
        console.log(array[i])
    }
}


// do not change
// for testing purposes
//printArray(input);







////9. Write a function called reverseArray that accepts an array as an argument. 
//// Within the function, reverse the array. Return the reversed array.


//var fs = require("fs");
//var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");


//write your code here

function reverseArray(array){
    return array.reverse();
}



// do not change
// for testing purposes

//console.log(reverseArray(input));