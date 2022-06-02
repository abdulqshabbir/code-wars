var rightSideView = function(root) {
    /*
        time: O(n) 
        space: O(n)
    */
    let res = []
    let queue = []
    
    if (root) queue.push(root)
    
    while (queue.length !== 0) {
        let qLength = queue.length
        let addedRightMostNode = false
        
        for (let i = 0; i < qLength; i++) {
            let curr = queue.shift()
            if (!addedRightMostNode) {
                res.push(curr.val)
                addedRightMostNode = true
            }
            if (curr.right) queue.push(curr.right)
            if (curr.left) queue.push(curr.left)
        }
    }
    
    return res
};