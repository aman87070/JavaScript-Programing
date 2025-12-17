// Scope in JavaScript (Globle , Function, Block)
//1 Globle Scope
//A variable decleared outside any function or block is in the globle scope.
let name = "Aman Chaurasiya";

function ShowName() {
  console.log(name);
} // Accessable

ShowName();
console.log(name); // Accessable
// Note
// Globle function can be accessed  from any where.
// Overusing  globle variables can cause name conflicts

// 2. Function Scope
// variable declear inside a function are accessible only within that function.
// Note
// a. Function scopes is created only by functions.
// b. Var is function scoped, not block scoped

function myFunction() {
  let message = "I can do it";
  console.log(message);
}
myFunction();

//3. Block Scope
// Variables decleared inside {} uning let or const are block scoped
if (true) {
  let city = "Delhi";
  const country = "India";
}

// tips
// Lexical scope
// Inner function can access variable from their outer scope.

function outer() {
  let count = 5;
  function inner() {
    console.log(count);
  }
  inner();
}
outer();
