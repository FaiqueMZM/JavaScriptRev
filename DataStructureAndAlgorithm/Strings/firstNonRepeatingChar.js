// first non repeating char in a string

function firstNonRepeatingChar(str) {
  for (let c in str) {
    if (str.indexOf(str[c]) === str.lastIndexOf(str[c])) {
      return str[c];
    }
  }
  return null;
}

console.log(firstNonRepeatingChar("swiss")); // Output: 'w'
