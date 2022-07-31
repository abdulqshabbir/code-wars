// time: O(n^2) because for each starting number in triplet we have to iterate over the remaining array to find the last two nums in triplet
// space: O(n) because we're using a hashset to keep track of triplets added so we don't have duplicates
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    const res = []
    const set = new Set()
    
    for (let idx = 0; idx < nums.length - 2; idx++) {
        const target = -nums[idx]
        
        let l = idx + 1
        let r = nums.length -1
        
        while (l < r) {
            const sum = nums[l] + nums[r]
            if (sum === target) {
                let key = nums[idx] + "," + nums[l] + "," + nums[r]
                if (!set.has(key)) {
                    res.push([nums[idx], nums[l], nums[r]])
                    set.add(key)
                }
                l++
            } 
            else if (sum > target) {
                r-- 
            }
            else if (sum < target) {
                l++
            }
        }
    }
    return res
};

// O(n) space solution
// similar to solution above but since array is sorted we can skip over duplicates
// by intelligently moving pointers instead of keeping a hashset of tripletss
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    const res = []
    for (let idx = 0; idx < nums.length - 2; idx++) {
        const target = -nums[idx]
        
        if (idx > 0 && nums[idx] === nums[idx-1]) continue
        
        let l = idx + 1
        let r = nums.length -1
        
        while (l < r) {
            const sum = nums[l] + nums[r]
            if (sum === target) {
                res.push([nums[idx], nums[l], nums[r]])
                l++
                
                while (l < r && nums[l] === nums[l-1]) {
                    l++
                }
                
                while (l < r && nums[r-1] === nums[r]) {
                    r--
                }
            } 
            else if (sum > target) {
                r-- 
            }
            else if (sum < target) {
                l++
            }
        }
    }
    return res
};