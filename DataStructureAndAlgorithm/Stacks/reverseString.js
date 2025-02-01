// reverse a stirng using stack

function reverseString(str) {
    let stack = [];
    
    for (let char of str) {
      stack.push(char);
    }
  
    let reversedStr = "";
    while (stack.length > 0) {
      reversedStr += stack.pop();
    }
  
    return reversedStr;
  }
  
  console.log(reverseString("hello")); // Output: "olleh"
  