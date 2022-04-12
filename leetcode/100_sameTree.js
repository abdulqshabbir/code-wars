var isSameTree = function(p, q) {
    // empty subtrees are equal
    if (p === null && q === null) {
        return true
    }
    // subtrees with one null and one non-null node are not equal
    if (p === null || q === null) {
        return false
    }
    // subtrees with different values are not equal
    if (p.val !== q.val) {
        return false
    }
    // recurse over left and right subtrees
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right) 
};
