// sort a stack

function sortStack(stack) {
    let tempStack = [];

    while (stack.length > 0) {
        let temp = stack.pop();

        while (tempStack.length > 0 && tempStack[tempStack.length - 1] > temp) {
            stack.push(tempStack.pop());
        }

        tempStack.push(temp);
    }

    return tempStack;
}

console.log(sortStack([34, 3, 31, 98, 92, 23])); // Output: [3, 23, 31, 34, 92, 98]

// using built-in functions

function sortStack(stack) {
    return stack.sort((a, b) => a - b);
}

console.log(sortStack([34, 3, 31, 98, 92, 23]));