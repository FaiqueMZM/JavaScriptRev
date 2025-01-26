// find keys in both objects

function commonKey(obj1, obj2) {
    return Object.keys(obj1).filter(key => key in obj2);
}

console.log(commonKey({ a: 1, b: 2, c: 3 }, { c: 4, d: 5, e: 6 })); // Output: ['c']