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

function minCostClimbingStairs(cost) {
    cost.push(0)
    for (let i = cost.length-3; i >=0; i--) {
        cost[i] += Math.min(cost[i+1], cost[i+2])
    }
    
    return Math.min(cost[0], cost[1])
}