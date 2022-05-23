/*
    1 -> 3 -> 2 <-> 4
*/

var findDuplicate = function(nums) {
    let slow = nums[0]
    let fast = nums[0]
    
    while (true) {
        slow = nums[slow]
        fast = nums[nums[fast]]
        if (slow === fast) break
    }
    
    slow = nums[0]
    while (slow !== fast) {
        slow = nums[slow]
        fast = nums[fast]
    }
    
    return nums[slow]
};
findDuplicate([1,3,4,2,2])