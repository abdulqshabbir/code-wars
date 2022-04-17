var lowestCommonAncestor = function(root, p, q) {
    const pathToP = traverseAndReturnPath(root, p) //[2]
    const pathToQ = traverseAndReturnPath(root, q) // [2, 1]
    
    let lca
    
    let numIterations = Math.min(pathToP.length, pathToQ.length)
    let shorterPath = pathToP.length < pathToQ.length ? pathToP : pathToQ
    
    for (let i = 0; i < numIterations; i++) {
        if (pathToP[i] === pathToQ[i]) {
            lca = shorterPath[i]
            console.log(lca)
        }
    }
    return lca
};

function traverseAndReturnPath(root, node) {
    let current = root
    let path = []
    path.push(current.val)
      
    while (current.val !== node.val) {
        if (node.val < current.val) {
            // traverse left subtree
            current = current.left
            path.push(current.val)
        } else if (node.val > current.val) {
            // traverse right subtree
            current = current.right 
            path.push(current.val)
        } else {
           // found node 
           break 
        }
    }
    
    return path
}