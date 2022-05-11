var search = function(nums, target) {
    let l = 0
    let r = nums.length - 1
    let m
    
    while (l <= r) {
        m = Math.floor((l + r)/2)
       if (nums[m] === target) {
            return m
       } else if (target < nums[m]) {
            r = m - 1
       } else {
           l = m + 1
       }
    }
    return -1
};