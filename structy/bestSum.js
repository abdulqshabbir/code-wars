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

console.log(bestSum(7, [5, 3, 4, 7])) // [4, 3]
console.log(bestSum(8, [2, 3, 5])) // [5, 3]
console.log(bestSum(8, [1, 4, 5])) // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])) // [25, 25]
