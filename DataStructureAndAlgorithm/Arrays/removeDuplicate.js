// remove duplicates from an array

function removeDuplicates(arr) {
  let unique = [];
  for (let c of arr) {
    if (!unique.includes(c)) {
      unique.push(c);
    }
  }
  return unique;
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 3, 6])); // Output: [1, 2, 3, 4, 5, 6]

// using built-in methods

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 3, 6])); // Output: [1, 2, 3, 4, 5, 6]
