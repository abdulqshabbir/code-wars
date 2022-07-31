var findTarget = function(root, k) {
    let nums = new Set()
    
    function findNumsThatSumToK(node) {
        if (!node) return false
        
        if (nums.has(k - node.val)) return true
        
        nums.add(node.val)
        
        return findNumsThatSumToK(node.left) || findNumsThatSumToK(node.right)
    }

    return findNumsThatSumToK(root)
};