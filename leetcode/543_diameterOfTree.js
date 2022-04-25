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
 * @return {number}
 */
 var diameterOfBinaryTree = function(root) {
    return findDiameter(root) 
};

function findDiameter(root) {
    /*
        starting at root perform a BFS
        add root onto the queue
        start diameter at 0
        
        while queue is not empty
            oneLeftChild = false
            oneRightChild = false
            
            pop all nodes in the same level off  queue
            
                if curr has left child set leftChild to treu and add to queueu
                if curr has right child set rightChild to true and add to queue
            
            if oneLeftChild diameter ++
            if oneRightChild diameter ++
        
        return diameter
    */
}