/*
    Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
    The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
    You must write an algorithm that runs in O(n) time and without using the division operation.
*/

var productExceptSelf = function(nums) {
    const pre = new Array(nums.length).fill(1)
    const post = new Array(nums.length).fill(1)
    const answer = []
    post[nums.length -1] = 1
    
    let preProd = 1
    for (let i = 1; i < pre.length; i++) {
       preProd = preProd * nums[i - 1]
       pre[i] = preProd
    }
    
    let postProd = 1
    for (let i = post.length - 2; i >= 0; i--) {
       postProd = postProd * nums[i + 1]
       post[i] = postProd
    }
    
    for (let i = 0; i < nums.length; i++) {
        answer[i] = pre[i] * post[i]
    }
    return answer
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