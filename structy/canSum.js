/*
    let m be the target, n be the length of the nums array
    time complexity (brute force) : O(n^m)
    -> in the worst case, nums will have a 1 which will mean the target drops by 1
    -> after each recursive call.  There will be n recursive calls and each of these
    -> recursive calls will branch m times.
    -> therefore, number of child nodes will be n^m
    
    space complexity (brute force)
    -> In the worst case, if nums contains a 1, the depth of the three will be n
    -> therefore, O(n) is the space complexity of recursive stack

    
*/
function canSum(target, nums, memo = new Map()) {
    if (target === 0) return true
    if (target < 0) return false
    if (memo.has(target)) return memo.get(target)

    for (let num of nums) {
        let remainder = target - num
        let canSumWithRemainder = canSum(remainder, nums, memo)
        memo.set(remainder, canSumWithRemainder)
        if (canSumWithRemainder) return true
    }

    return false
}

function canSumTabulated(target, nums) {
    let table = new Array(target + 1).fill(false)
    
    // base case
    table[0] = true

    // recursive step
    for (let i = 0; i < target + 1; i++) {
        if (table[i] === true) {
            for (let num of nums) {
                const inBounds = i + num <= target
                if (inBounds) {
                    table[i + num] = true
                }
            }
        } 
    }

    return table[target]
}

console.log(canSumTabulated(7, [3, 5, 4])) // true
console.log(canSumTabulated(2, [3, 5, 4])) // false
console.log(canSumTabulated(300, [7, 14])) // false