// <==204==>

// Given an integer n, return the number of prime numbers that are strictly less than n.

// Example 1:

// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

function isPrime(num) {
    if (num <= 1) return false; 
    
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true;
}

function countPrimes(n) {
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
}
console.log(countPrimes(50)); 