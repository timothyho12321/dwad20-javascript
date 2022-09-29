// a const is short for constant
// a const variable is basically a variable once assigned a value cannot be reassigned to

// const pi = 3.14;
// pi = 3.1417;

// let x = 6;
// x=7


// no intent of reassigning a value to ageOfAlice 
// according to convention  can use const


//can change in array or object
// just block direct reassignment
const fruits = ["apples", "bananas", "oranges"]
// fruits = ["1", "2", "3"] -> not accepted
fruits[1]="durians"
fruits.push = "mangosteen"
console.log(fruits);



