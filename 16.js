//Valid Sudoku
// You are given a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:

// Each row must contain the digits 1-9 without duplicates.
// Each column must contain the digits 1-9 without duplicates.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
// Return true if the Sudoku board is valid, otherwise return false

// Note: A board does not need to be full or be solvable to be valid.

// Input: board =
// [["1","2",".",".","3",".",".",".","."],
//  ["4",".",".","5",".",".",".",".","."],
//  [".","9","8",".",".",".",".",".","3"],
//  ["5",".",".",".","6",".",".",".","4"],
//  [".",".",".","8",".","3",".",".","5"],
//  ["7",".",".",".","2",".",".",".","6"],
//  [".",".",".",".",".",".","2",".","."],
//  [".",".",".","4","1","9",".",".","8"],
//  [".",".",".",".","8",".",".","7","9"]]

// Output: true

function isValidSudoku(board) {
    let seen = new Set();

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            let value = board[row][col];
            if (value === '.') continue;

            let rowKey = `row-${row}-${value}` //row-0-1
            let colKey = `col-${col}-${value}`// col-0-1
            let boxKey = `box-${Math.floor(row / 3)}-${Math.floor(col / 3)}-${value}`// box-0-0-1

            if (seen.has(rowKey) ||
                seen.has(colKey) ||
                seen.has(boxKey)
            ) {
                return false;
            }
            seen.add(rowKey);
            seen.add(colKey);
            seen.add(boxKey)
        }
    }
    return true;
}
console.log(isValidSudoku([["1", "2", ".", ".", "3", ".", ".", ".", "."],
["4", ".", ".", "5", ".", ".", ".", ".", "."],
[".", "9", "8", ".", ".", ".", ".", ".", "3"],
["5", ".", ".", ".", "6", ".", ".", ".", "4"],
[".", ".", ".", "8", ".", "3", ".", ".", "5"],
["7", ".", ".", ".", "2", ".", ".", ".", "6"],
[".", ".", ".", ".", ".", ".", "2", ".", "."],
[".", ".", ".", "4", "1", "9", ".", ".", "8"],
[".", ".", ".", ".", "8", ".", ".", "7", "9"]]
))