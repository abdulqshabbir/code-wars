/*
    Given the root of a binary tree, return its maximum depth.
    A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/

// Recursive DFS
var maxDepth = function(root) {
    if (root === null) return 0
        
    let leftSubtree = 1 + maxDepth(root.left)
    let rightSubtree = 1 + maxDepth(root.right)
    
    return Math.max(leftSubtree, rightSubtree)
}

// Iterative BFS
var maxDepth = function(root) {
    if (root === null) return 0
    
    let queue = []
    let depth = 0
    queue.push(root)
    
    while (queue.length !== 0) {
        let curr
        let nodesInQ = queue.length
        for (let i = 0; i < nodesInQ; i++) {
            curr = queue.shift()
            if (curr.left !== null) {
                queue.push(curr.left)
            }
            if (curr.right !== null) {
                queue.push(curr.right)
            }
        }
        depth = depth + 1
    }
    return depth
}