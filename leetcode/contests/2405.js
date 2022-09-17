var partitionString = function(s) {
    let set = new Set()
    let partitions = 1

    for (let char of s) {
        if (set.has(char)) {
            set.clear()
            partitions++
            set.add(char)
        } else {
            set.add(char)
        }
    }
    
    return partition
}