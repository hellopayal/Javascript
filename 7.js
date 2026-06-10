// Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.



// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true


function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    for (let i = 0; i < s.length; i++) {
        const index = t.indexOf(s[i]);
        if (index === -1) {
            return false;
        }
        t = t.slice(0, index) + t.slice(index + 1)

    }
    return t.length === 0;
}

let s = "ab"
let t = "ac"
console.log(isAnagram(s, t))

