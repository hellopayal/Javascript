// Generate Parentheses

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.



// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

var generateParenthesis = function (n) {
    let result = []
    function Backtrack(str, open, close) {
        if(str.length === n*2){
            result.push(str)
            return result;
        } if(open < n){
            Backtrack(str + "(", open+1, close)
        } if (close < open){
            Backtrack(str + ")", open, close+1)
        }
    }
    Backtrack("", 0, 0)
    return result;
}
console.log(generateParenthesis(3))