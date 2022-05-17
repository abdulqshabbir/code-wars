var search = function(nums, target) {
    let l = 0
    let r = nums.length - 1
    
    while (l < r) {
        let m = Math.floor((l + r)/2)
        
        if (nums[m] === target) return m
        
        if (nums[l] < nums[m] && target >= nums[l] && target < nums[m]) {
            r = m - 1
        } else if (nums[m] < nums[r] && target > nums[m] && target <= nums[r]) {
            l = m + 1
        } else if (nums[l] > nums[m]) {
            r = m - 1
        } else {
            l = m + 1
        }
    }
    
    if (l < nums.length && nums[l] === target) return l
    
    return -1
};