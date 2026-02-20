/*
    The var keyword is used to declare a variable. It has a function-scoped or globally-scoped behaviour.
    The let keyword is introduced in ES6, has block scope and cannot be re-declared in the same scope.
    The const keyword declares variables that cannot be reassigned. It's block-scoped as well.
*/

var n = 5;
console.log(n);
var n = 20; // reassigning is allowed for 'var'
console.log(n);

// let  n= 10; //This will throw an error
let m = 10;
m = 20; // Value can be updated
// let m = 15; //can not redeclare
console.log(m)

const a = 100;
// a = 200; This will throw an error
console.log(a)