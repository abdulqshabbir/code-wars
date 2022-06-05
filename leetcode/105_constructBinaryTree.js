var buildTree = function(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) {
        return null
    }

    let subtreeRoot = new TreeNode(preorder[0])
    let m = inorder.findIndex(elem => elem === preorder[0])

    let leftPreorder = preorder.slice(1, m + 1)
    let rightPreorder = preorder.slice(m+1)

    let leftInorder = inorder.slice(0, m)
    let rightInorder = inorder.slice(m + 1)

    subtreeRoot.left = buildTree(leftPreorder, leftInorder)
    subtreeRoot.right = buildTree(rightPreorder, rightInorder)

    return subtreeRoot 
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}