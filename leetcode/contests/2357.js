function getValidNumbers(soFar, seen, pattern) {
    let i = soFar.length -1
    let prevNum = Number(soFar[i])
    let res = []

    if (pattern[i] === "I") {
        for (let possibleNum = prevNum + 1; possibleNum <= 9; possibleNum++) {
            if (!seen.has(possibleNum)) res.push(possibleNum)
        }
    } else {
        for (let possibleNum = 1; possibleNum < prevNum; possibleNum++) {
            if (!seen.has(possibleNum)) res.push(possibleNum)
        }    
    }
    return res.length === 0 ? null : res
}

function backtrack(soFar, seen, pattern) {
    if (soFar.length === pattern.length + 1) {
        // base case: we found a valid string
        return soFar.join("")
    }

    else if (soFar.length !== 0 && getValidNumbers(soFar, seen, pattern) === null) {
        // base case: no more paths to explore with this state
        return null
    }
    
    // initial iteration: try numbers 1-9 for first number taking a greedy approach
    for (let num = 1; num <= 9; num++) {
        const validNums = soFar.length === 0 ?[1, 2, 3, 4, 5, 6, 7, 8, 9] : getValidNumbers(soFar, seen, pattern)
        if (validNums.includes(num)) {
            seen.add(num)
            soFar.push(num)
            const solution = backtrack(soFar, seen, pattern)
            if (solution !== null) return solution
            soFar.pop()
            seen.delete(num)
        }
    }

    return null
}

var smallestNumber = function(pattern) {
    let seen = new Set() 
    
    return backtrack([], seen, pattern) 
};

console.log(smallestNumber("DDD"))