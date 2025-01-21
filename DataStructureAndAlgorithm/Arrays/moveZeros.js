// move zeros to the ene of and arrar

function moveZeros(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[count++] = arr[i];
        }
    }
    while (count < arr.length) {
        arr[count++] = 0;
    }
    return arr;
}

console.log(moveZeros([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]

function moveZeros(arr) {
    let result = [];
    let count = 0;

    for (let i in arr) {
        if (arr[i] !== 0) {
            result[count++] = arr[i];
        }
    }
    while (count < arr.length) {
        result[count++] = 0;
    }
    return result;
}

console.log(moveZeros([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]

// using loops
function moveZeros(arr) {
    let result = [];
    let zeroCount = 0;

    for (let num of arr) {
        if (num === 0) {
            zeroCount++;
        } else {
            result.push(num);
        }
    }

    while (zeroCount--) {
        result.push(0);
    }

    return result;
}

console.log(moveZeros([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
