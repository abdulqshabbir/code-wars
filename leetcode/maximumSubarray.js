/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
A subarray is a contiguous part of an array.
*/

var maxSubArray = function(nums) {
    let currentSum = nums[0]
    let maxSum = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (currentSum < 0) {
            currentSum = 0
        }
        currentSum += nums[i]
        if (currentSum > maxSum) {
            maxSum = currentSum
        }
    }
    return maxSum
};