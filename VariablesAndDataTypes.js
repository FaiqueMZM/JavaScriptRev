// three ways to declare variables
// 1. var
// 2. let
// 3. const

// var
// function scoped, only accessible within the function
// can be re-declared and updated within the same scope
// doesnt respect block scope

console.log(a); // undefined
var a = 10;
console.log(a);

// let
// block scoped, only accessible within the block
// cannot be re-declared in the same scope but can be updated

// console.log(b); // ReferenceError, cannot access 'b' before initialization
let b = 20;
console.log(b);

// const
// block scoped, only accessible within the block
// cannot be re-declared or updated once assigned
// reference cannot be changed but the content of the array or object can be modified

const c = 30;
// c = 40; // TyoeError, assignment to constant variable

const player = { name: "Lewis" };
player.name = "Max";
console.log(player);
