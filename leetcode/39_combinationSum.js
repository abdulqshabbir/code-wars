function addTabs(numCalls, msg) {
    let finalMsg = ""
    for (let i = 0; i < numCalls; i++) {
        finalMsg += " "
    }
    finalMsg += msg
    console.log(finalMsg)
}

var combinationSum = function(candidates, target) {
    let res = []
    let numCalls = 0 
    dfs(0, [], 0)
    
    function dfs(i, curr, total) {
        numCalls++

        if (total === target) {
            res.push(curr.slice())
            return
        } if (total > target || i === candidates.length) {
            return
        }
        
        // choose candidates[i] and add to possible combination
        curr.push(candidates[i])
        addTabs(numCalls, `dfs(${i}, ${curr}, ${total + candidates[i]})`)
        dfs(i, curr, total + candidates[i])
        
        // unchoose candidates[i] and select from remaining nums
        curr.pop() 
        addTabs(numCalls, `dfs(${i + 1}, ${curr}, ${total})`)
        dfs(i+1, curr, total)
    }
    return res
};

combinationSum([2,3,6,7], 7)