// <==7==>
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
