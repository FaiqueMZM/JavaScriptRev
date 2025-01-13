// check if the word is palindrome

function isPalindrome(str) {
  //   for (let char of str) {
  //     if (char !== str[str.length - 1 - str.indexOf(char)]) {
  //       return false;
  //     }
  //   }
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false

// alternate method using built-in functions

function isPalindrome(str) {
  return str.split("").reverse().join("") === str;
}

console.log(isPalindrome("racecar")); // Output: trues
console.log(isPalindrome("hello")); // Output: false
