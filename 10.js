// Merge Intervals

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.



// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

function mergeInterval(Intervals) {
    Intervals.sort((a, b) => a[0] - b[0])
    let res = [];
    for (let interval of Intervals) {
        if (res.length === 0 || interval[0] > res[res.length - 1][1]) {
            res.push(interval)
        } else {
            res[res.length - 1][1] = Math.max(res[res.length - 1][1], interval[1])
        }
    }
    return res;

};


console.log(mergeInterval([[1, 3], [2, 6], [8, 10], [15, 18]]))
