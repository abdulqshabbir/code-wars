function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0 
    
    function dfs(root) {
        // dfs: root -> [height, diameter] of subtree rooted at root
        
        // base case: null has height and diameter of 0
        if (root === null) {
            return [0, 0]
        }
        // base case: leaf node has height and diameter of 0
        if (root.left === null && root.right === null) {
            return [0, 0]
        }
        
        let [lHeight, lDiameter] = dfs(root.left)
        let [rHeight, rDiameter] = dfs(root.right)

        // compute height of root
        let h = 1 + Math.max(lHeight, rHeight)
        
        // compute diameter through root
        let d
        if (root.left && root.right) {
            d = 2 + lHeight + rHeight
        }
        else if (root.left) {
            d = 1 + lHeight
        }
        else if (root.right) {
            d = 1 + rHeight
        }
        
        if (d > maxDiameter) maxDiameter = d
        
        return [h, d]
    }
    
    dfs(root)
    
    return maxDiameter
};

let t = new TreeNode(1)
t.left = new TreeNode(2)
t.right = new TreeNode(3)
t.left.left = new TreeNode(4)
t.left.right = new TreeNode(5)

diameterOfBinaryTree(t)