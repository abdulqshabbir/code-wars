var longestConsecutive = function(nums) {
    const numsSet = new Set(nums)
    let maxSeqSize = 0
    
    for (let num of nums) {
        if (numsSet.has(num-1)) continue
        
        let seqSize = 1
        let n = num 
        while (numsSet.has(n + 1)) {
            seqSize++
            n++ 
        }
        
        maxSeqSize = Math.max(seqSize, maxSeqSize)
    }
    
    return maxSeqSize
};