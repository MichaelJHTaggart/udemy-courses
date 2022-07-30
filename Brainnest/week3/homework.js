// JavaScript 1

//? 1. Name the three ways to declare a variable?
// let, const, var
//? 2. Which of the three variable declarations should you avoid and why?
// var, because it is globally scoped. 
//? 3. What rules should you follow when naming variables?
// applicable, meaningful names
//? 4. What should you look out for when using the + operator with numbers and strings?
// Make sure that you are not concatinating words with numbers. 
//? 5. How does the % operator work?
// The remainder operator, returns the remainder when the first operand is divided by the second operand.
//? 6. Explain the difference between == and ===.
// the == operator does the type conversion of the operands before comparison, whereas the === operator compares the values as well as the data types of the operands
//? 7. When would you receive a NaN result?
// You get NaN when the value cannot be computed or as a result of attempted number coercion (type conversion) of non-numeric value (such that undefined) for which primitive numeric value is not available.
//? 8. How do you increment and decrement a number?
// ++ || --
//? 9. Explain the difference between prefixing and post-fixing increment/decrement operators.
// Postfix decrement operator means the expression is evaluated first using the original value of the variable and then the variable is decremented(decreased). Prefix increment operator means the variable is incremented first and then the expression is evaluated using the new value of the variable.
//? 10. What is operator precedence and how is it handled in JS?
// Grouping is king, but it can be short circuited with an if or an or statement
//? 11. How do you log information to the console?
// console.log()
//? 12. What does unary plus operator do to string representations of integers?
// concats them together
//? 13. What are the eight data types in JavaScript?
// Boolean type
// Null type
// Undefined type
// Number type
// BigInt type
// String type
// Symbol type
// Objects (collections of properties)

//? 14. Which data type is NOT primitive?
// Objects
//? 15. What is the relationship between null and undefined?
// they are loosely recognized as the same thing. null == undefined (true). 
//? 16. What is the difference between single, double, and backtick quotes for strings?
// backticks allow for variables. 
//? 17. What is the term for embedding variables/expressions in a string?
//? 18. Which type of quote lets you embed variables/expressions in a string?
// backticks
//? 19. How do you embed variables/expressions in a string?
//? 20. How do you escape characters in a string?
//? 21. What is the difference between the slice/substring/substr string methods?
//? 22. What are the three logical operators and what do they stand for?
//? 23. What are the comparison operators?
//? 24. What are truthy and falsy values?
//? 25. What are the falsy values in JavaScript?
//? 26. What are conditionals?
//? 27. What is the syntax for an if/else conditional?
//? 28. What is the syntax for a switch statement?
//? 29. What is the syntax for a ternary operator?
//? 30. What is nesting?
//? 31. What are functions useful for?
//? 32. How do you invoke a function?
//? 33. What are anonymous functions?
//? 34. What is function scope?
//? 35. What are return values?
//? 36. What are arrow functions?
//? 37. Using new Map is different than Set()? Both have access to .has()

// JavaScript Assignments

// 1. Read more about JS and try to answer as many questions as you can from the JS1 - Terminology
// & Definitions file, which you can find attached in the email.
// 2. Assignment (Mathematical Shapes):
// a. Write a JavaScript program to find the diagonal of a square where the length of each
// side is 9.
// b. Write a JavaScript program to find the area of a triangle where lengths of the three of its
// sides are 5, 6 and 7.
// c. Write a JavaScript program to find the circumference and surface area of a circle whose
// radius is 4.
// i. When trying to find these values, you will need to use PI. Remember constants?
// 3. Assignment (Conditional Statements & Loops):
// a) Write a JavaScript program that accepts two integers and displays the larger of the two.
// b) Write a JavaScript program that checks whether an integer is an even or an odd number.
// 4. Assignment (Main JavaScript Project):
// a) Create a blank HTML document with a script tag (Hint: it is best practice to link an
// external .js file). This game is going to be played completely from the console, so don’t
// worry about putting anything else in there.
// b) Your game is going to play against the computer, so begin with a function called
// computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this
// function in the game to make the computer’s play. Tip: use the console to make sure this
// is returning the expected output before moving to the next step!
// c) Write a function that plays a single round of Rock Paper Scissors. The function should
// take two parameters - the playerSelection and computerSelection - and then return a
// string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// i. Make your function’s playerSelection parameter case-insensitive (so users can
// input rock, ROCK, RocK or any other variation). (Here’s a tip on how to do that)
// d) Important note: you want to return the results of this function call, not console.log()
// them. You’re going to use what you return later on, so let’s test this function by using
// console.log to see the results:
// e) Write a NEW function called game(). Call the playRound function inside of this one to
// play a 5 round game that keeps score and reports a winner or loser at the end.
// i. Remember loops? This is a great opportunity to use one to play those five
// rounds:
// ii. At this point you should be using console.log() to display the results of each
// round and the winner at the end.
// iii. Use prompt() to get input from the user. Read the docs here.
// iv. Feel free to re-work your previous functions if you need to. Specifically, you
// might want to change the return value to something more useful.
// v. Feel free to re-work your previous functions if you need to. Specifically, you
// might want to change the return value to something more useful.