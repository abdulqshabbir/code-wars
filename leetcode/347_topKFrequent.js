// bucket sort approach
// time: O(n), space: O(n)
var topKFrequent = function(nums, k) {
    const numCounts = new Map()

    for (let num of nums) {
        if (!(numCounts.has(num))) numCounts.set(num, 0)
        numCounts.set(num, numCounts.get(num) + 1)
    }
    
    const buckets = new Array(nums.length + 1).fill(null).map(e => new Array(0))
    
    for (let num of numCounts.keys()) {
        buckets[numCounts.get(num)].push(num)
    }

    const res = []
    
    for (let i = buckets.length - 1; i >=0; i--) {
        if (buckets[i].length > 0) {
            res.push(...buckets[i])
            if (res.length === k) return res
        }
    } 

};

// time: O(nlogn), space: O(n)
var topKFrequent = function(nums, k) {
    const freq = new Map()
    
    for (let num of nums) {
        if (!freq.has(num)) freq.set(num, 0)
        freq.set(num, freq.get(num) + 1)
    }
    
    const numberFrequencyTuples = []
    
    for (let [num, f] of freq.entries()) {
        numberFrequencyTuples.push([num, f])
    }
    
    numberFrequencyTuples.sort((a, b) => b[1] - a[1])
    
    const result = []
    
    for (let i = 0; i < k; i++) {
        result.push(numberFrequencyTuples[i][0])
    }
    
    return result 
};