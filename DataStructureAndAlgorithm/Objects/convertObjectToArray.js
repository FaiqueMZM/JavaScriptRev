// convert an object to a array

function obejctToArray(arr) {
    return Object.entries(arr);
}

console.log(obejctToArray({ a: 1, b: 2, c: 3 })); // Output: [ ['a', 1], ['b', 2], ['c', 3] ]