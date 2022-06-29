function bestSum (target, nums, memo = new Map()) {
    if (memo.has(target)) return memo.get(target)
    if (target === 0) return []
    if (target < 0) return null

    let shortestSum = null

    for (let num of nums) {
        let rem = target - num
        let res = bestSum(rem, nums, memo )

        if (res !== null) {
            let sum = [...res, num]
            if (shortestSum === null || sum.length < shortestSum.length) {
                shortestSum = sum
            }
        }
    }

    memo.set(target, shortestSum)

    return shortestSum
}

function bestSumTabulated(target, nums) {
    const table = new Array(target + 1).fill(null)
    table[0] = []

    for (let i = 0; i < target + 1; i++) {
        if (table[i] !== null) {
            for (let num of nums) {
                let inBounds = i + num <= target

                if (inBounds && table[i + num] === null) {
                    table[i+num] = [...table[i], num]
                }
                else if (inBounds && table[i+num] !== null) {
                    let newCombination = [...table[i], num]
                    if (newCombination.length < table[i+num].length) {
                        table[i + num] = newCombination
                    }
                }
            }
        }
    }

    return table[target]
}

console.log(bestSum(7, [5, 3, 4, 7])) // [7]
console.log(bestSum(8, [2, 3, 5])) // [5, 3]
console.log(bestSum(8, [1, 4, 5])) // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])) // [25, 25]
