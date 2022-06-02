var levelOrder = function(root) {
    let res = []
    let q = []
    let idx = 0
    
    if (root) {
        q.push(root)
    }
    
    while (q.length !== 0) {
        let qLength = q.length 
        res[idx] = []
        for (let i = 0; i < qLength; i++) {
            let curr = q.pop()
            res[idx].push(curr.val) 
            if (curr.left) q.push(curr.left)
            if (curr.right) q.push(curr.right)
        }
        idx++
    }
    
    return res
};
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}