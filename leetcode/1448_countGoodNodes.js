var goodNodes = function(root) {
    function recursivelyFindGoodNodes(current, pathMax) {
        if (current === null) {
            return 0
        }
        else if (current.val >= pathMax) {
            let newPathMax = Math.max(current.val, pathMax)
            let goodNodesLeft =  recursivelyFindGoodNodes(current.left, newPathMax)
            let goodNodesRight = recursivelyFindGoodNodes(current.right, newPathMax)
            return 1 + goodNodesLeft + goodNodesRight
        } else {
            let goodNodesLeft =  recursivelyFindGoodNodes(current.left, pathMax)
            let goodNodesRight = recursivelyFindGoodNodes(current.right, pathMax)
            return goodNodesLeft + goodNodesRight
        }  
    }
    return recursivelyFindGoodNodes(root, -Infinity)
};