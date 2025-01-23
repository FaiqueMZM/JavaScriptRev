// first non reapeating element in an array

function firstNonReapeatingElement(arr) {
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count === 1) {
            return arr[i];
        }
    }
    return -1;
}

console.log(firstNonReapeatingElement([9, 2, 3, 2, 3, 4, 5])); // Output: 9
console.log(firstNonReapeatingElement([3 , 3, 1, 2, 3, 4, 5])); // Output: 1

// using built-in functions

function firstNonReapeatingElement(arr) {
    let count = new Map();
    for (let num of arr) {
        count.set(num, (count.get(num) || 0) + 1);
    }
    for (let num of arr) {
        if (count.get(num) === 1) {
            return num;
        }
    }
    return -1;
}

console.log(firstNonReapeatingElement([9, 2, 3, 2, 3, 4, 5])); // Output: 9
console.log(firstNonReapeatingElement([3 , 3, 1, 2, 3, 4, 5])); // Output: 1