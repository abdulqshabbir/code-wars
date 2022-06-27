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

const target = 300
const nums = [7, 14]

console.log(canSum(target, nums))