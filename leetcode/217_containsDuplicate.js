/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    const counts = new Map()
    
    for (let num of nums) {
       if (!(counts.has(num))) {
           counts.set(num, 1)
       } else {
           return true
       }
    }
    return false
};