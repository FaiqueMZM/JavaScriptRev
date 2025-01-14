// find minimum and maximum in an array

function getMinMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let n of arr) {
    if (n < min) {
      min = n;
    }
    if (n > max) {
      max = n;
    }
  }
  return { min, max };
}

console.log(getMinMax([1, 5, 9, 2, 6, 8, 3, 7, 4])); // Output: { min: 1, max: 9 }

// using built-in methods

function getMinMax(arr) {
  return { min: Math.min(...arr), max: Math.max(...arr) };
}

console.log(getMinMax([1, 5, 9, 2, 6, 8, 3, 7, 4])); // Output: { min: 1, max: 9 }
