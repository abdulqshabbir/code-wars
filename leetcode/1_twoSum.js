
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    let numToIndex = new Map()
    let complement
    
    for (let i = 0; i < nums.length; i++) {
        complement = target - nums[i] 
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), i] 
        }
        numToIndex.set(nums[i], i)            
    }
    
};