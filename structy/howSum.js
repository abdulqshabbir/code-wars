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