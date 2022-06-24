var subsetsWithDup = function(nums) {
    let res = []
    
    createSubsets([], new Set(), 0)
    
    function createSubsets(possibleSubset, excludeSet, i) {
        if (i === nums.length) {
            res.push(possibleSubset.slice())
            return
        }
        let curr = nums[i] 
        
        if (!excludeSet.has(curr)) {
            // include curr in set
            possibleSubset.push(curr)
            createSubsets(possibleSubset, excludeSet, i+1)
        }

        // exclude curr in set
        possibleSubset.pop()
        excludeSet.add(curr)
        createSubsets(possibleSubset, excludeSet, i+1)
        excludeSet.delete(curr)
    }
    return res
}