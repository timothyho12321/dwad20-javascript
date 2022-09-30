// function divide(x,y){
//     result = x/y;
//     return result;
    
//   }
//   // write your code above this line
//   // do not modify after this line
//   module.exports = divide;



// // QUestion 3.06
//   function getNumber() {

//     let number = parseFloat(prompt("Key in number:"));
//     console.log(number); // why must this line go before line 17
//     return number;
//   }
  
//   x = getNumber();



//   //Question 3.07
//   function product(x) {
//     x = x * 7;
//    return x;
//  }
 
//  let x = 5;
//  x= product(x);
//  console.log(x);


//  // Question 3.09
//  function averageOfThree(x,y,z){
//     result = (x+y+z)/3;
//     return result;
    
//   }
  
  
  
//   //Do not edit any codes below
//   //Test Cases
//   console.log("Test Case 1")
//   console.log("Execpt: 4")
//   console.log("Actual: " + averageOfThree(3,4,5))
  
//   console.log("\nTest Case 2")
//   console.log("Execpt: 18.333333333333332")
//   console.log("Actual: " + averageOfThree(10,30,15))
  
//   console.log("\nTest Case 3")
//   console.log("Execpt: 0")
//   console.log("Actual: " + averageOfThree(0,0,0))



// // Question 3.10 
// const prompt = require('prompt-sync')();

// function calculateGst(price){
//     let gst2 = 0.07 * price;
//     return gst2;
//   }
  
//   function calculateTotalPrice(price, gst) {
//     let total2 = price + gst;
//     total2 = total2.toFixed(2);
//     return total2;
//   }
  
//   let price = 10;
//   let gst = calculateGst(price);
//   let total = calculateTotalPrice(price, gst);
//   console.log(total);


//   // QUestion 3.11
//   function calculateGst(price){
//     let gstAmount = 0.07*price;
//     return gstAmount;
//   }
  
//   function calculateServiceCharge(price){
//     let serviceCharge = 0.1*price;
//     return serviceCharge;
//   }
  
//   function calculateTotalPrice(total,p=1.17) {
//     let final = total * p;
//     return final;
//   }
  
//   let price = parseFloat(prompt());
//   let gst = calculateGst(price);
//   let total = calculateTotalPrice(total,p=1.17);
//   console.log(total);


