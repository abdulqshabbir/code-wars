var threeSum = function(nums) {
    let triplets = new Set()
    nums = nums.sort((a, b) => a-b)
    let result = []
    for (let i = 0; i <= nums.length - 3; i++) {
        let j = i + 1
        let k = nums.length - 1
        while (j < k) {
           let sum = nums[i] + nums[j] + nums[k]
           if (sum === 0 ) {
                let tripMatch = [nums[i], nums[j], nums[k]]
                if (!triplets.has(JSON.stringify(tripMatch))) {
                    result.push(tripMatch)
                    triplets.add(JSON.stringify(tripMatch))
                }
                j++
           } else if (sum > 0) {
                k-- 
           } else {
                j++
           }
        }
    }
    return result
};