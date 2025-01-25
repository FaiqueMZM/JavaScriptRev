// merge two objects, duplicate key's values will be summed

function mergeTwoObjects(obj1, obj2) {
    let merged = {...obj1 };

    for (let key in obj2) {
        merged[key] = (merged[key] || 0) + obj2[key];
    }

    return merged;
}

console.log(mergeTwoObjects({ a: 1, b: 2 }, { b: 3, c: 4 })); // Output: { a: 1, b: 5, c: 4 }