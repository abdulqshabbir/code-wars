function howSum(target, nums) {
    if (target === 0) return []
    if (target < 0) return null

    for (let num of nums) {
        let rem = target - num
        let remResult = howSum(rem, nums)
        if (remResult !== null) {
            return [...remResult, num]
        }
    }

    return null
}

function howSumTabulated(target, nums) {
    const table = new Array(target + 1).fill(null)
    table[0] = []

    for (let i = 0; i < target + 1; i++) {
        if (table[i] !== null) {
            for (let num of nums) {
                let inBounds = i + num <= target
                if (inBounds) {
                    table[i + num] = [...table[i], num]
                }
            }
        }
    }

    return table[target]
}

console.log(howSumTabulated(5, [2, 1]))    // [1, 2, 2]
console.log(howSumTabulated(7, [4, 2, 6])) // null
console.log(howSumTabulated(0, [1, 2]))    // []

