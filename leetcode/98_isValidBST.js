var isValidBST = function(root) {
    function dfs(current, min, max) {
        if (current === null) return true
        
        if (current.val > min && current.val < max) {
            return dfs(current.left, min, current.val) && dfs(current.right, current.val, max)
        }
        else {
            return false
        } 
    }
    
    return dfs(root, -Infinity, Infinity)
};