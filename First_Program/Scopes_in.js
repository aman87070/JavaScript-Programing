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
