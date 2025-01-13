// reverse a string

function reverseString(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

console.log(reverseString("Hello, World!")); // Output: !dlroW ,olleH

// using built-in reverse method

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Hello, World!")); // Output: !dlroW ,olleH
