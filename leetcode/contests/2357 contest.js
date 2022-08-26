function smallestPositive (nums) {
    let res = 101
    for (let num of nums) {
       if (num < res && num > 0) {
           res = num
       } 
    }
    return res
}

var minimumOperations = function(nums) {
    let ops = 0
    
    while (nums.some(num => num > 0)) {
        let min = smallestPositive(nums)
        nums = nums.map(num => num - min)
        ops++
    }
    
    return ops
};