//  Letter Combinations of a Phone Number

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.




// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

var letterCombinations = function (digits) {
    if (digits.length === 0) return [];
    const map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    };
    let result = [];
    function Backtrack(index, str) {
        if (str.length === digits.length) {
            result.push(str);
            return result;
        }
        let letters = map[digits[index]] 

        for (let ch of letters) {
            Backtrack(index + 1, str + ch) 
        }

    }
    Backtrack(0, "")
    return result;

}

console.log(letterCombinations("23"))