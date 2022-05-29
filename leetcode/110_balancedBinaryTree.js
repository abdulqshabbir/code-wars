var isBalanced = function(root) {
    let res = true
    
    function dfs(root) {
        if (root === null) return -1
        
        let l = dfs(root.left)
        let r = dfs(root.right)
        
        if (Math.abs(l - r) > 1) {
            res =  false
        }
        
        let heightOfRoot = 1 + Math.max(l, r)
        
        return heightOfRoot
    }
    dfs(root)
    
    return res
};