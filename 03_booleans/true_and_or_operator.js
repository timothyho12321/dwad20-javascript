// Hands on slide 27 java 3
//x =3, y =4, z =0, a =1, password = 'rotiprata', email =""


1. x && y 
3 && 4
4 
//both left and right hand are truthy values, AND operator result in second truthy value.  

2. email || password
"" || 'rotiprata'
'rotiprata

3. parseInt(password) || y
parseInt'rotiprata' || 4
NaN|| 4
4

4. y-a-x && 10
4-1-3 && 10
0 && 10
0
// && take the first false value if there are any falsy value.
// && take last truthy value if all truthy

5. 
y && true && password == "rotiprata"
4  && true && "rotiprata"== "rotiprata"
4  && true && true
true && true
true


6. z +a || x + y
0 + 1||3+4
1||7
1
// OR is the first truthy value 

7. email && password
"" && 'rotiprata'
""

