// find th elargest number in the array

function secondLargestNum(arr) {
  let max = arr[0];
  let secondMax = arr[0];

  for (let n of arr) {
    if (n > max) {
      secondMax = max;
      max = n;
    } else if (n > secondMax && n < max) {
      secondMax = n;
    }
  }
  return secondMax;
}

console.log(secondLargestNum([1, 5, 9, 2, 6, 8, 3, 7, 4])); // Output: 8

// using built-in methods

function secondLargest(arr) {
  let unique = [...new Set(arr)]; // Remove duplicates
  unique.sort((a, b) => b - a);
  return unique[1];
}

console.log(secondLargestNum([1, 5, 9, 2, 6, 8, 3, 7, 4])); // Output: 8
