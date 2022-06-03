/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/*

create a hashmap which maps num -> {node: TreeNode, pIdx: num}
add root to hashmap (3 -> new TreeNode(3))

for each i from 1 to N-1:
    currentVal = preorder[i]
    parentNode = null
    isLeftChild = false
    for each node in hashmap:
        if currentVal inorder idx < node idx:
            isLeftChild = true
            parentNode = node
        else if currentVal inorder idx > node idx:
            isLeftChild = false
            parentNode = node
    
    add new TreeNode(currentVal) to hashmap
    if (isLeftChild) parentNode.left = newNode
    else parentNode.right = newNode
    
    
              3
            /   \ 
          1      10
       /   \
     2       22 
           / 
         33
hashmap = {
    3 -> TreeNode(3, left: 1),
    2 -> TreeNode(2)    
}


                  i
preorder = [3, 1, 2, 22, 33, 10]
inorder = [2, 1, 33, 22, 3, 10]
           0  1   2   3  4   5
root = 3
root.left = 1
root.left.left = 2
root.left.right = 22

*/


/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    
};