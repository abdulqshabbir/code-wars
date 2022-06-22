/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let res = []
    
    function buildSubsets(nums, i, subsetSoFar = []) {
        if (i === nums.length) {
            res.push(subsetSoFar.slice())
            return
        }
        
        subsetSoFar.push(nums[i]) // choose
        buildSubsets(nums, i + 1, subsetSoFar) // explore
        subsetSoFar.pop() // unchoose
        buildSubsets(nums, i + 1, subsetSoFar) // explore
    }
    
    buildSubsets(nums, 0)
    
    return res
};

console.log(subsets([1,2,3]))