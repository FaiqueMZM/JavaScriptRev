// rotate an array n number of times

function rotateArray(arr, n) {
  n %= arr.length;
  for (let i = 0; i < n; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]

// using built-in methods

function rotateArray(arr, k) {
  k %= arr.length;
  return [...arr.slice(-k), ...arr.slice(0, -k)];
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
