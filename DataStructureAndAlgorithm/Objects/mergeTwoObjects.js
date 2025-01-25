// merge two objects, duplicate key's values will be summed

function mergeTwoObjects(obj1, obj2) {
    let merged = { ...obj1 };

    for (let key in obj2) {
        merged[key] = (merged[key] || 0) + obj2[key];
    }

    return merged;
}

console.log(mergeTwoObjects({ a: 1, b: 2 }, { b: 3, c: 4 })); // Output: { a: 1, b: 5, c: 4 }

// alternate implementation

function mergeTwoObjects(obj1, obj2) {
    const merged = { ...obj1 }; 

    for (const key in obj2) {
        if (key in merged) {
            merged[key] += obj2[key];
        } else {
            merged[key] = obj2[key]; 
        }
    }

    return merged;
}

console.log(mergeTwoObjects({ a: 5, b: 1 }, { b: 2, c: 6 })); // Output: { a: 5, b: 3, c: 6 }
