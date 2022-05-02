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
    
    const countToValues = new Array(nums.length).fill([])
    const result = []
    let inserts = 0
    let i = nums.length-1
    
    // O(n) time to set up countToValues array
    for (let [val, count] of Object.entries(counts)) {
        val = parseInt(val)
        console.log(countToValues[count])
        countToValues[count][0].push(val) 
    }
    console.log(countToValues)
    
    while (inserts < k && i >= 0) {
        while (countToValues[i].length === 0) {
            i--
        }
        const val = countToValues[i].pop()
        result.push(val)
        inserts++
    }
    
    return result
};

topKFrequent([1, 1, 1, 2, 2, 3], 2)