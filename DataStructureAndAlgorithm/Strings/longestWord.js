// longest word in the string

function longestWord(str) {
  let words = str.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(longestWord("I love JavaScript")); // Output: "JavaScript"

// using built-in methods

function longestWord(str) {
  return str
    .split(" ")
    .reduce((longest, current) =>
      current.length > longest.length ? current : longest
    );
}

console.log(longestWord("I love JavaScript")); // Output: "JavaScript"
