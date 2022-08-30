var maximumSum = function(nums) {
    let sumToNum = new Map()
    let res = -1
    
    for (let num of nums) {
        let n = num
        let sum = 0
        while (n > 0) {
           sum += n % 10
           n = Math.floor(n/10)
        }
        if (!sumToNum.has(sum)) {
            sumToNum.set(sum, num)
        } else {
            let prev = sumToNum.get(sum)
            res = Math.max(res, prev + num)
            sumToNum.set(sum, Math.max(prev, num))
        }
    }
    return res
};