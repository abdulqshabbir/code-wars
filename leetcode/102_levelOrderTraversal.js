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
    * @return {number[][]}
 */
 var levelOrder = function(root) {
    if (root === null) return []
    
    let result = []
    let queue = []
    let level = 0
    
    queue.push(root) 
    while (queue.length !== 0) {
        let current
        result[level] = []
        let qLength = queue.length
        for (let i = 0; i < qLength; i++)   {
            current = queue.shift()
            result[level].push(current.val)
            if (current.left !== null) {
                queue.push(current.left)
            }
            if (current.right !== null) {
                queue.push(current.right)
            }
        }
        level = level + 1 
    } 
    
    return result
};