

// Question p. 13
// const prompt = require('prompt-sync')();

// let a = parseInt(prompt("Type number"));

// if (a % 2 == 0) {
//     console.log("Even");
// }


// // or if (a %2!=0) but USE ELSE IN THIS CASE 
// else { 
//     console.log("Odd");
// }



// Pet example 
const prompt = require('prompt-sync')();
let love = prompt("Do you want a pet to love and care for (y/n):");

if (love == "y") {
    // TEST console.log("love-y")
    let forget = prompt("Are you likely to forget you have a pet (y/n):");
    if (forget == "y") {
        // TEST console.log("forget-y")
        let timePeriod = prompt("How soon (weeks/days):");
        if (timePeriod == "weeks") {
            console.log(("You need a rock"));
        }
        else {
            console.log(("Fish"));
        }
    }

    else {
        //TEST console.log("forget-n")
        let affection = prompt("Do you want a creature that returns your affection? (y/n)");
        if (affection == "y") {
            //TEST console.log("affection-y")
        }
        else {
            //TEST console.log("affection-n") 
            let doThing= prompt("Do you want to watch your pet do things? (y/n)");
            if (doThing == "y") {
                log.console("fish");
            }
            else {
                log.console("rock");
            }
    }
}


if (love == "n") {

    console.log("You need a rock");
}


