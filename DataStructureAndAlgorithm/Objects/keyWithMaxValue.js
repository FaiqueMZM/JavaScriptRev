// find the key with maximum value

function keyWithMaxValue(obj) {
    let maxKey = null;
    let maxValue = -Infinity;

    for (let key in obj) {
        if (obj[key] > maxValue) {
            maxValue = obj[key];
            maxKey = key;
        }
    }

    return maxKey;
}

console.log(keyWithMaxValue({ a: 5, b: 12, c: 8 })); // Output: "b"
console.log(keyWithMaxValue({ a: 5, z: 12 })); // Output: "z"

// using built-in functions

function keyWithMaxValue(obj) {
    return Object.keys(obj).reduce((maxKey, key) =>
        obj[key] > obj[maxKey] ? key : maxKey
    );
}

console.log(keyWithMaxValue({ a: 5, b: 12, c: 8 })); // Output: "b"
console.log(keyWithMaxValue({ a: 5, z: 12 })); // Output: "z"