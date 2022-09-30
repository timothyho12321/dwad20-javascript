const prompt = require ('prompt-sync')();
console.log("Pet recommender");
console.log("Answer y or n");
let ans = prompt("Do you want a pet to care and love for")
if (ans == "y") {
    console.log("Are you likely to forget you have a pet ")
    console.log("a. No");
    console.log("b. For weeks at a time");
    console.log("c. For days at a time");
    // we can let ans because line 12 is in new scope due to the if {}

    let ans = prompt ("Enter your choice:");
    if (ans == "a") {
        let ans = prompt (" Do you want a creature that returns your affection?")
        if (ans = "y") {
            let ans = prompt("Do you want to train your pets to do things")
            if (ans=="y") {
                // ask if you want pet to think of you as master or slave
                console.log("How you want your pet to think of you?");
                console.log ("a.master");
                console.log ("b.slave");
                let ans = prompt ("Your choice");
                if (ans == "a") {
                    console.log("Dog");
                } else {
                    console.log("Cat");
                }
            } else {
                // ask if you have a zoo or enclosure FILL IN 
            }

        } else {
            // show affection FILL IN 
        }

    }
    if (ans == "c"){
        console.log("Fish");
    }
    if (ans == "b"){
        console.log("Rock");
    }

} else {
    console.log("you need a rock");
}