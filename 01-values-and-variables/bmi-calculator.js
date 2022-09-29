// prompt is available after line 3 

const prompt = require('prompt-sync')();

//input 
let weight = prompt("Please enter your weight");
let height = prompt("Please enter your height");

// processing
weight = parseFloat(weight);
height = parseFloat(height);
bmi = weight / height ** 2;

//Output
console.log("Your bmi is", bmi);


// want to determine is overweight or healthy weight

if (bmi < 18.5) {
    console.log("Underweight");
} else if (bmi < 24.5) {
    console.log("Healthy weight");
} else if (bmi < 30) {
    console.log("Healthy weight");
}
