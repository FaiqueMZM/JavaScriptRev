// check if two objects are equal

function areObjectsEqual(object1, object2) {
    let keys1 = Object.keys(object1);
    let keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (object1[key] !== object2[key]) {
            return false;
        }
    }

    return true;
}

console.log(areObjectsEqual({ a: 1, b: 2 }, { a: 1, b: 2 })); // Output: true
console.log(areObjectsEqual({ a: 1, b: 2 }, { a: 1, b: 3 })); // Output: false