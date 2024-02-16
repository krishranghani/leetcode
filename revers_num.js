// <==7==>

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321

function reverseInteger(x) {
    let reversed = 0;
    while (x !== 0) {
        const digit = x % 10; 
        reversed = reversed * 10 + digit; 
        x = Math.trunc(x / 10); 
    }
   
    if (reversed < -1234567890 || reversed > 1234567890) {
        return 0;
    }
    return reversed;
}

const input = 123456789;
const output = reverseInteger(input);
console.log(output);
