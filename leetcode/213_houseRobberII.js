/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if (nums.length === 1) return nums[0]

    let robHouseOne = nums.slice(0, nums.length -1) 
    let robLastHouse = nums.slice(1)
    
    return Math.max(helper(robHouseOne), helper(robLastHouse))
};

function helper(nums) {
    let last = nums.length -1
    let nextToLast = nums.length -2
    
    nums[nextToLast] = Math.max(nums[last], nums[nextToLast])
    
    for (let i = nums.length -3; i >= 0; i--) {
        nums[i] = Math.max(nums[i] + nums[i+2], nums[i+1])
    }
    
    return nums[0]
}