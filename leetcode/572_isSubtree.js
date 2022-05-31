/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

 var isSubtree = function(root, subRoot) {
    let res = false
    
    function dfs(root) {
        if (isSameTree(root, subRoot)) {
            res = true
        } else {
            if (root) {
                dfs(root.left, subRoot)
                dfs(root.right, subRoot)
            }
        }
    } 
    
    dfs(root)
    
    return res
}

function isSameTree(p, q) {
    if (p === null && q === null) {
        return true
    }
    if (!p || !q) {
        return false
    }
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}