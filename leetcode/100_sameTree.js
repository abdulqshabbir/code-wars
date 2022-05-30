var isSameTree = function(p, q) {
    // empty trees are equal
    if (p === null && q === null) return true
    
    // if one subtree is empty and another is non-empty they are not equal
    if (!p || !q) return false
    
    // if they are both non-empty check their values
    if (p.val !== q.val) return false 
    
    // recursively step through both subtrees
    return isSameTree(p.left, q.left) && isSameTree(p.right,q.right)
}