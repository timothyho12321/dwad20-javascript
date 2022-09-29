const prompt = require('prompt-sync')();

function askForWeight() {
    const weight = parseFloat(prompt("Enter weight here:"));
    return weight;
}

function askForHeight() {
    let height = parseFloat(prompt("Enter height here:"));
    return height;
}

function calculateBMI(weight,height){
let bmi = weight / height ** 2
return bmi
}

function displayBMI(){
    console.log("Your bmi is:", bmi);
}

console.log("Please enter the first set of readings")
const weight = askForWeight();
let height = askForHeight();
let bmi = calculateBMI(weight, height);
displayBMI(bmi);

console.log("Please enter the second set of readings")
let weight2 = askForWeight();
let height2 = askForHeight();
let bmi2 = calculateBMI(weight, height);
displayBMI(bmi);


