// missing number in an array of series

function missingNum(arr, n) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return (n * (n + 1)) / 2 - sum;
}

console.log(missingNum([1, 2, 4, 5, 6], 6)); // Output: 3
