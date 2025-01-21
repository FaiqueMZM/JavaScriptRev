// find the majority element in an array

function majorityElement(arr) {
    let count = 0;
    let majority = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === majority) {
            count++;
        } else {
            count--;
            if (count === 0) {
                majority = arr[i];
                count = 1;
            }
        }
    }

    return majority;
}

console.log(majorityElement([3, 2, 3, 4, 2, 2, 3])); // Output: 2

