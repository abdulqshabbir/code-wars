/*
    Given the root of a binary tree, return its maximum depth.
    A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/

var maxDepth = function(root) {
    if (root === null) return 0
        
    let leftSubtree = 1 + maxDepth(root.left)
    let rightSubtree = 1 + maxDepth(root.right)
    
    return Math.max(leftSubtree, rightSubtree)
}