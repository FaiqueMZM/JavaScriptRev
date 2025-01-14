// replace spaces in a string

function replaceSpaces(str, char) {
  let results = "";
  for (let c of str) {
    if (c === " ") {
      results += char;
    } else {
      results += c;
    }
  }
  return results;
}

console.log(replaceSpaces("Hello world!", "-")); // Output: Hello-world!

// using built-in methods

function replaceSpaces(str, char) {
  return str.split(" ").join(char);
}

console.log(replaceSpaces("Hello world!", "-")); // Output: Hello-world!
