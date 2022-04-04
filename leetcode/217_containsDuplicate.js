/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    const counts = new Map()
    
    for (let num of nums) {
       if (!(counts.has(num))) {
           counts.set(num, 1)
       } else {
           return true
       }
    }
    return false
};

// alternate solution with O(1) space if we exclude the answer array
var productExceptSelf = function(nums) {
    const answer = []
    let preProd = 1
    answer[0] = 1
    for (let i = 1; i < nums.length; i++) {
       preProd = preProd * nums[i - 1]
       answer[i] = preProd
    }
    let postProd = 1
    for (let i = nums.length -1; i >= 0; i--) {
        answer[i] = answer[i] * postProd
        postProd = postProd * nums[i]
    }
    
    return answer
};