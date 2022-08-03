/// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
// (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed).
// Print the result to the console.
// b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
// c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.



let ages = [3, 9, 23, 64, 2, 8, 28, 93];
ages.push(99);
let agesLength = ages.length;

console.log (ages[agesLength - 1] - ages[0]);



function average(ages){
}

let sum = ages.reduce(add, 0);

function add(accumulator, a) {
  return accumulator + a;
}

console.log(sum / ages.length);





/// 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
//Print the result to the console.
// b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, 
// and print the result to the console.


 let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
let nameLength = names.map(function(element) {
    return element.length;
});
console.log(nameLength);

/// below is a and b

let lettersLength = nameLength.reduce(function
    (previous, currentValue) {
        return previous + currentValue;
    });

    console.log((lettersLength / names.length) + ' ' + names.join(', '));


/// 3.	How do you access the last element of any array?
/// There are three ways: 
/// A. Using an Array.length - 1
/// B. Using slice() method 
/// C. Using pop() method

///4.	How do you access the first element of any array?
/// Arr[0]


/// 5. Create a new array called nameLengths. 
/// Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.


let namesArray = ["Kelly", "Sam", "Kate"];
let nameLengths = namesArray.map(function(firstName) {
    return firstName.length;
});
console.log(nameLengths);


///6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
/// Print the result to the console.

let sum1 = nameLengths.reduce(function
    (previous, currentValue) {
        return previous + currentValue;
    });
 console.log(sum1)

/// 7.	Write a function that takes two parameters, word and n, as arguments 
/// and returns the word concatenated to itself n number of times. 
// (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).


function loopUntilN(word, n){
    for (let i = 1; i <= n; i++) {
    console.log(word);}
}
loopUntilN("wiggle", 3)

// Note: Struggling with that one. Could be this OR could be 

function loopUntilN2(word,n){
    console.log(word.repeat(n));
}
loopUntilN2("Wiggle", 5)


///8.	Write a function that takes two parameters, firstName and lastName, 
// and returns a full name (the full name should be the first and the last name separated by a space).

 function fullName(firstName, lastName){
    console.log (firstName + " " + lastName)
 }
 fullName("Jane", "Doe")


///9.	Write a function that takes an array of numbers 
/// and returns true if the sum of all the numbers in the array is greater than 100.

let array1 = [3, 7, 10, 5, 4, 1, 50]
let sum2 = 0




function greaterSum(array){
    for (let i = 0; i < array.length; i++) {
        sum2 += array[i];
    }
    console.log(sum2);
}
greaterSum(array1)


///10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
let array2 = [2, 4, 6, 8]
let sum3 = 0

function avgNum(array){
    for (let i = 0; i < array.length; i++){
        sum3 += array[i];
    }
    console.log(sum3 / array.length)
}

avgNum(array2)

///11.	Write a function that takes two arrays of numbers and returns true 
// if the average of the elements in the first array is greater than the average of the elements in the second array.

let arrayFirst = [5, 10, 10, 10, 15];
let arraySecond = [3, 3, 6];
let sumA = 0;
let sumB = 0;

function questionEleven(arrayA, arrayB){
    for(let i = 0; i < arrayA.length; i++){
        sumA+=arrayA[i];
    }
    console.log(sumA);
    for(let i = 0; i < arrayB.length; i++){
        sumB+=arrayB[i];
    }
    console.log(sumB);
    let aveA = sumA / arrayA.length;
    console.log(aveA);
    let aveB = sumB / arrayB.length;
    console.log(aveB);

    if(aveA > aveB){
        console.log (true)
    } else {
        console.log (false)
    }
}
questionEleven(arrayFirst, arraySecond)


///12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
// and returns true if it is hot outside and if moneyInPocket is greater than 10.50.


 function willBuyDrink(isHotOutside, moneyInPocket){
    if (isHotOutside = true && moneyInPocket >= 10.50){
        console.log (true); 
        return true;
    } else {
        console.log (false);
        return false;
    }
 }

 willBuyDrink(true, 11.55)

///13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

 function feedCat(alreadyFed, howManyTimes){
    if (alreadyFed = true && howManyTimes >= 3){
        console.log (false + " Do not feed, because cat has been fed");
        return false;
    } else {
        console.log (true + " Feed, because cat is hungry");
        return true;
    }
 }
  feedCat(true, 1)

// I created this problem because my cat acts as though she has not been fed when she has, in fact, been fed three times.
