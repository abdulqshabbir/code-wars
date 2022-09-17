var mostFrequentEven = function(nums) {
    const mp = new Map()
    
    for (let num of nums) {
        if (!mp.has(num) && num % 2 === 0) mp.set(num, 0)
        if (num % 2 === 0) {
            mp.set(num, mp.get(num) + 1)
        }
    }
    
    let mostFrequentEven = -1
    let maxCount = -1
    
    for (let [num, count] of mp.entries()) {
        console.log({maxCount, mostFrequentEven})
        if (count > maxCount) {
            maxCount = count
            mostFrequentEven = num
        } else if (count === maxCount) {
            if (num < mostFrequentEven) {
                mostFrequentEven = num
                maxCount = count
            }
        }
    }
    
    return mostFrequentEven
};