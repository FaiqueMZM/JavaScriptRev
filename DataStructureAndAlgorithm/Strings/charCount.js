// count each characters in the string

function countCharacters(str) {
  let count = {};
  for (let c of str) {
    count[c] = (count[c] || 0) + 1;
  }
  return count;
}

console.log(countCharacters("JavaScript")); // Output: { J: 1, a: 2, v: 1, S: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }

// using built-in methods

function countCharacters(str) {
  return str.split("").reduce((count, char) => {
    count[char] = (count[char] || 0) + 1;
    return count;
  }, {});
}

console.log(countCharacters("JavaScript")); // Output: { J: 1, a: 2, v: 1, S: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }
