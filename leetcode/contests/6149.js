function sum(arr) {
    return arr.reduce((curr, acc) => curr + acc, 0)
}

function createIncomingAdjList(edges) {
    let adj = new Map()
    
    for (let [nodeA, nodeB] of edges.entries()) {
        if (!adj.has(nodeB)) adj.set(nodeB, [])
        
        adj.get(nodeB).push(nodeA)
    }
        
    return adj  
}
var edgeScore = function(edges) {
    let adj = createIncomingAdjList(edges) 
    let maxEdgeScore = -Infinity
    let maxEdgeNode = null    

    for (let [nodeB, incomingEdges] of adj.entries()) {
        if (sum(incomingEdges) > maxEdgeScore) {
            maxEdgeScore = sum(incomingEdges)
            maxEdgeNode = nodeB
        } else if (sum(incomingEdges) === maxEdgeScore) {
            if (nodeB < maxEdgeNode) {
                maxEdgeScore = sum(incomingEdges)
                maxEdgeNode = nodeB
            }
        }
    }
    return maxEdgeNode
};