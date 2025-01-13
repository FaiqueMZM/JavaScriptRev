// check if the string contains unique characters

function uniqueChar(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[i] === str[j]) {
        return false;
      }
    }
  }
}

console.log(uniqueChar("hello")); // Output: false
console.log(uniqueChar("world")); // Output: true

// alternate function using built-in funcitons

function uniqueChar(str) {
  return new Set(str).size === str.length;
}

console.log(uniqueChar("hello")); // Output: false
console.log(uniqueChar("world")); // Output: true
