var climbStairs = function(n) {
    let cache = new Map()
    
    return climbStairsRecurse(n, cache)
};

function climbStairsRecurse(n, cache) {
    if (n === 0) return 1  
    if (n === -1) return 0
    else if (cache.has(n-1) && cache.has(n-2)) {
        return cache.get(n-1) + cache.get(n-2)
    } else {
        let x = climbStairsRecurse(n-1, cache)
        let y = climbStairsRecurse(n-2, cache)
        
        if (!cache.has(n-1)) {
            cache.set(n-1, x)
        }
        if (!cache.has(n-2)) {
            cache.set(n-2, y) 
        }
        return cache.get(n-1) + cache.get(n-2)
    }
}