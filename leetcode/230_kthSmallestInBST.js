/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
    let result = null
    let nthSmallest = 0
    
    function dfs(node) {
        if (node === null) return 
        
        dfs(node.left)
        
        nthSmallest++
        if (nthSmallest === k) {
            result = node.val
            return
        }
        
        dfs(node.right)
    }
    
    dfs(root, 0)
    return result
};