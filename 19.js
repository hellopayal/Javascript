//  Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.



// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

var isPalindrome = function (s) {
    let str = ""
    for (let char of s) {
        if (/[a-z0-9]/i.test(char)) {
            str += char.toLowerCase()
        }
    }
    let left = 0
    let right = str.length - 1
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;

}

console.log(isPalindrome("A man, a plan, a canal: Panama"))