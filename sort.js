//==>2724<==  [7/36]

// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.

// You may assume that fn will never duplicate numbers for a given array.

 

// Example 1:

// Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
// Output: [1, 2, 3, 4, 5]
// Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.

var sortBy = function(arr) {
    return arr.sort((a, b) => a - b); 
};

var numbers = [4, 2, 5, 1, 3];

var sortedNumbers = sortBy(numbers);
console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5]
