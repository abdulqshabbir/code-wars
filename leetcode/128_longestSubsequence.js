var longestConsecutive = function(nums) {
    let numMap = new Map()
    
    nums.forEach(num => {
        numMap.set(num, num)
    })
    
    let longestSeq = 0
    
    for (let num of nums) {
        let seq = 1
        if (seq > longestSeq) {
            longestSeq = seq
        }
        let curr = num
        if (!numMap.has(curr - 1)) {
            // curr is start of sequence
            while (numMap.has(curr+1)) {
                seq++
                if (seq > longestSeq) longestSeq = seq
                curr = numMap.get(curr+1) 
            }
        } 
    }
    
    return longestSeq
    
};
longestConsecutive([100,4,200,1,3,2])