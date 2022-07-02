var rob = function(nums) {
    
    function robRecurse(i, memo = new Map()) {
        if (memo.has(i)) {
            return memo.get(i)
        }
        
        if (i >= nums.length) {
            return 0
        }
        
        let maxChildSum = 0
        
        for (let j = i + 2; j < nums.length; j++) {
            let sum = robRecurse(j, memo)
            maxChildSum = Math.max(sum, maxChildSum)
        }
        
        memo.set(i, nums[i] + maxChildSum) 
        
        return memo.get(i)
    } 
    
    return Math.max(robRecurse(0), robRecurse(1))
};

var robTabulated = function(nums) {
    nums.push(0)
    
    let lastHouse = nums[nums.length -2]
    let secondLastHouse = nums[nums.length -3]
    
    nums[nums.length -2] = lastHouse
    nums[nums.length -3] = Math.max(lastHouse, secondLastHouse)
    
    for (i = nums.length -4; i >=0; i--) {
        nums[i] = nums[i] + Math.max(nums[i+2], nums[i+3]) 
    }
    
    return Math.max(nums[0], nums[1])
};