var longestOnes = function(nums, k) {
    let l = 0
    let r = 0
    let longest = 0
    let countOfOnes = 0
    
    while (r < nums.length) {
        if (nums[r] === 1) countOfOnes++
        
        const isWindowValid = (r - l + 1) - countOfOnes <= k
        
        if (isWindowValid) {
            longest = Math.max(longest, r - l + 1)
            r++
        } else {
            if (nums[l] === 1) countOfOnes--
            l++
        }
    }
    
    return longest 
};