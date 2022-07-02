var minCostClimbingStairs = function(cost) {
    
    function minCost(i, memo = new Map()) {
        if (memo.has(i)) {
            return memo.get(i)
        }
        if (i >= cost.length) {
            return 0
        }
        
        const oneStepCost = cost[i] + minCost(i+1, memo)
        const twoStepsCost = cost[i] + minCost(i+2, memo)
        const minStepCost = Math.min(oneStepCost, twoStepsCost)
        
        memo.set(i, minStepCost) 
        return memo.get(i)
    }
    
    return Math.min(minCost(0), minCost(1))
};