// reverse the words in a string

function reverseWords(str) {
  let words = str.split(" ");
  let reversedWords = [];
  for (let i = words.length - 1; i >= 0; i--) {
    reversedWords.push(words[i]);
  }
  return reversedWords.join(" ");
}

console.log(reverseWords("Hello, World!")); // Output: World! Hello,
console.log(reverseWords("I love JavaScript")); // Output: JavaScript love I

// using built-in reverse method

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("Hello, World!")); // Output: World! Hello,
console.log(reverseWords("I love JavaScript")); // Output: JavaScript love I
