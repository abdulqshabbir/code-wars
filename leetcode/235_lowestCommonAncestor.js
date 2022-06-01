var lowestCommonAncestor = function(root, p, q) {
    let curr = root
    
    while (curr) {
        let forkExists = (p.val < curr.val && q.val > curr.val) 
                       ||(p.val > curr.val && q.val < curr.val)
        
        if (forkExists) {
            return curr
        } else if (curr.val === p.val || curr.val === q.val) {
            return curr
        } else {
            if (p.val < curr.val) {
                curr = curr.left
            } else {
                curr = curr.right
            }
        }
    }
};