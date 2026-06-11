//  Longest Substring Without Repeating Characters

//  Given a string s, find the length of the longest substring without duplicate characters.



// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

function lengthOfLongestSubstring(s) {
    let set = new Set()
    let left = 0;
    let maxLength = 0

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]); { 'a', 'c', 'b' }
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"))
