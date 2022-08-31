var smallestTrimmedNumbers = function(nums, queries) {
    let res = []

    for (let [k, trim] of queries) {
        let len = nums[0].length
        let trimmed = nums.map(num => num.slice(len - trim)).map((num, idx) => [BigInt(num), idx])
        trimmed.sort(customComparator)    
        res.push(trimmed[k-1][1])
    }

    return res
};

function customComparator(a, b) {
    if (a[0] < b[0]) return -1
    else if (a[0] > b[0]) return 1
    else {
        if (a[1] < b[1]) return -1
        else return 1
    } 
}