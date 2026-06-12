//Palindrome Check

// Given an integer x, return true if x is a palindrome, and false otherwise.



// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.


function palindrome(x) {
    let str = x.toString();

    let left = 0
    let right = str.length - 1

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++
        right--
    }
    return true;
}
console.log(palindrome(121))
