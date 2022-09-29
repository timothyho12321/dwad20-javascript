function foobar(x) {
    x = x + 10;
    return
}

let x = 3;
foobar(x);
console.log(x);


function replacewith99(something){
    something[0]=-99
}

let a = ["apples", "oranges", "bananas", "papayas"];
replacewith99(a);
console.log(a); // will get [-99 , "oranges", "bananas", "papayas"];

