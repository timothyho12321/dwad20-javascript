// function multi(x) {
//     return x * 2;

// }

// let ans = multi(2);
// console.log(ans);


// // write a function
// // know result of function 
// // know incoming parameters
// // know what the result should be
// // know how to calculate the result from the input


// function multi(x) {
//  let result = x*2;
//  return result;
// }


// function multi(x) {
//     let result = x * 2;
//     return result
// }

// answer = multi(4)
// console.log(answer);


// Hands on functions
// Question 1

const prompt = require('prompt-sync')();
function multi(x, y) {
    let result = x * y;
    return result;
}

let num1 = Number(prompt("Enter first num:"));
let num2 = Number(prompt("Enter second num:"));
answer = multi(num1, num2);
console.log("multiply answer1:", answer);
console.log("Multiplying", num1, "and", num2, "gives", answer);


// Question 2
function findDistance(speed, time) {
    distance = speed * time;
    return distance
}

answer2 = findDistance(3, 10)
console.log("distance answer2:", answer2);


// Question 3
function findPerimeter(length, breadth) {
    perimeter = 2 * length + 2 * breadth;
    return perimeter;
}

perimeter = findPerimeter(3, 4)
console.log("Perimeter answer3:", perimeter);


