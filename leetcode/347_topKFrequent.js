var topKFrequent = function(nums, k) {
    const counts = {}
    // O(n) time to set up hashmap
    for (let num of nums) {
        if (num in counts) {
            counts[num] += 1
        } else {
            counts[num] = 1
        }
    }
    
    const countToValues = new Array(nums.length + 1)
    const len = countToValues.length - 1
    for (let i = 1; i <= len; i++) {
        countToValues[i] = []
    }
    const result = []
    let inserts = 0
    let i = len
    
    // O(n) time to set up countToValues array
    for (let [val, count] of Object.entries(counts)) {
        val = parseInt(val)
        countToValues[count].push(val)
    }
    
    while (inserts < k && i > 0) {
        while (countToValues[i].length === 0) {
            i--
        }
        const val = countToValues[i].pop()
        result.push(val)
        inserts++
    }
    
    return result
};