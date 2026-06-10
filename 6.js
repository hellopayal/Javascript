// Given an integer array nums, find the subarray with the largest sum, and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6

var maxSubArray = function (nums) {
    if (nums.length == 0) return nums;
    let currentSum = nums[0]
    let maxSum = nums[0]

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i])
        maxSum = Math.max(currentSum, maxSum)

    }
return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))