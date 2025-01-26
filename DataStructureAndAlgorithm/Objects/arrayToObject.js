// convert a key value pair array to object 

function arrayToObject(arr) {
    return Object.fromEntries(arr);
}

console.log(arrayToObject([['a', 1], ['b', 2], ['c', 3]])); // Output: { a: 1, b: 2, c: 3 }