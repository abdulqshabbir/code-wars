
var combinationSum2 = function(candidates, target) {
    let res = []
    candidates.sort((a, b) => a - b)
    findCombinations(0, [], 0) 
    
    function findCombinations(start, state, sum) {
        if (sum === target) {
            res.push(state.slice())
            return
        }
        
        if (sum > target) {
            return
        }

        let prev = -1

        for (let i = start; i < candidates.length; i++) {
            let curr = candidates[i] 

            if (curr === prev) {
                continue
            }
            state.push(curr)
            findCombinations(i + 1, state, sum + curr)
            
            state.pop()
            prev = curr
        }
    }
    return res
};

console.log(combinationSum2([2,5,2,1,2], 5))