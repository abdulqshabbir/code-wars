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