/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    return findMinRecurse(nums, 0, nums.length-1, Infinity)
};

function findMinRecurse(nums, l, r, minSoFar) {
    let m = Math.floor((l + r)/2)
    if (r - l <= 1) {
        return Math.min(nums[m], nums[r], minSoFar)
    } 
    if (nums[m] > nums[l]) {
        minSoFar = Math.min(minSoFar, nums[l])
        return findMinRecurse(nums, m+1, r, minSoFar)
    } else {
        minSoFar = Math.min(minSoFar, nums[m])
        return findMinRecurse(nums, l + 1, m - 1, minSoFar)
    } 
}