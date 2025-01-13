// count vowels in a string

function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let c of str) {
    if (vowels.includes(c)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Hello World")); // Output: 3
