// Top K Frequent Elements

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.



// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2

// Output: [1,2]

function topKFrequent(nums, k) {
    let map = new Map()

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    let sorted = [...map.entries()].sort((a, b) => b[1] - a[1])

    return sorted.slice(0, k).map(item => item[0])
}

let nums = [3, 3, 3, 1, 1, 2, 2, 2, 2]
let k = 2

console.log(topKFrequent(nums, k))