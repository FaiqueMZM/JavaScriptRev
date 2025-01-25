// count occurence of each element in an array using an object

function countOccurence(arr) {
    let count = {};

    for (let item of arr) {
        count[item] = (count[item] || 0) + 1;
    }
    return count;
}

console.log(countOccurence([1, 2, 3, 2, 3, 4, 5])); // Output: { 1: 1, 2: 2, 3: 2, 4: 1, 5: 1 }
console.log(countOccurence([1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5])); // Output: { 1: 1, 2: 2, 3: 2, 4: