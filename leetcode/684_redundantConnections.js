var findRedundantConnection = function(edges) {
    let parent = new Array(edges.length + 1).fill(-1)
    parent[0] = null
    
    let ans
    for (let [v1, v2] of edges) {
        let p1 = findAbsoluteParent(v1, parent)
        let p2 = findAbsoluteParent(v2, parent)
        if (p1 === p2) {
            ans = [v1, v2]
        } else {
            union(p1, p2, parent)
        }
    }
    
    return ans
};

function findAbsoluteParent(node, parent) {
    if (parent[node] === -1) return node
    
    return findAbsoluteParent(parent[node], parent)
}

function union(p1, p2, parent) {
    parent[p1] = p2
}

console.log(findRedundantConnection([[1,2],[2,3],[3,4],[1,4],[1,5]]))