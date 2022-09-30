// at least three 

// // slides 33 - jave 3 - ternary Hands on 
// x is 3, y is 4 and password is "rotiprata", evaluate the following:

// 1. 
// undefined || x
// undefined || 3
// 3
// // take the first truthy value 

// 2. x == parseInt("2") + 1
// 3 == 2 + 1
// 3 == 3
// true

// 3. y === prompt("")
// 4  === "4"
// false


// 4. 
// x == 4 ? 10 : 15
// 3 == 4 ? 10 : 15
// false ? 10 : 15
// 15


// 5. 
// x > 0 && y < 5 ? "yes" : "no"
// 3 > 0 && 4 < 5 ? "yes" : "no"
// true && true ? "yes" : "no"
// true ? "yes" : "no"
// "yes"


// 6. 
// (0 || y) && true
// (0 || 4) && true
// 4 && true
// true

// 7. 
// x + "" + y == 34
// 3 + "" + 4 == 34
// "34" == 34
// true

// 8.
// x > 0 ? x > 10 ? "A" : "B" : "C"
// 3 > 0 ? (3 > 10 ? "A" : "B") : "C"
// true? false? "A" : "B" : "C"
// false? "A" : "B" 
// "B"

// 9. 
// password==='rotiprata' && x-4; 
// 'rotiprata'==='rotiprata' && 3-4; 
// true && -1;
// -1

// 10.  x+1-y? "Ok" : "Not ok"
// 3+1-4? "Ok" : "Not ok"
// 0? "Ok" : "Not ok"
// "Not ok"


// 11. 
// password/3 ? "Ok" : "Not Ok"
// "rotiprata"/3 ? "Ok" : "Not Ok"
// NaN  "Ok" : "Not Ok"
// "Not Ok"


// 12. 

// Math.sqrt(x-y) ? "Ok" : "Not Ok"
// Math.sqrt(-1) ? "Ok" : "Not Ok"
// NaN ? "Ok" : "Not Ok"
// "Not Ok"