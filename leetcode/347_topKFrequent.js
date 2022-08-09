// bucket sort approach
// time: O(n), space: O(n)
var topKFrequent = function(nums, k) {
    const valueToFreq = new Map()
    
    for (let num of nums) {
        if (!valueToFreq.has(num)) valueToFreq.set(num, 0)
        valueToFreq.set(num, valueToFreq.get(num) + 1)
    }
    
    const buckets = new Array(nums.length + 1).fill(0).map(() => new Array(0))
    
    for (let [val, freq] of valueToFreq.entries()) {
        buckets[freq].push(val)
    }
    
    const kFrequentElements = []
    for (let i = nums.length; i >= 0; i--) {
        for (let j = buckets[i].length -1; j >=0; j--) {
            kFrequentElements.push(buckets[i][j])
            if (kFrequentElements.length === k) return kFrequentElements
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