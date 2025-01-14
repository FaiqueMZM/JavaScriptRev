// check if the array is sorted

function isSorted(arr) {
  for (let c of arr) {
    if (c > arr[c + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted([1, 2, 3, 4, 5])); // Output: true
console.log(isSorted([5, 4, 3, 2, 1])); // Output: false

// using built-in methods

function isSorted(arr) {
  return arr.every((value, index) => index === 0 || value >= arr[index - 1]);
}

console.log(isSorted([1, 2, 3, 4, 5])); // Output: true
console.log(isSorted([5, 4, 3, 2, 1])); // Output: false
