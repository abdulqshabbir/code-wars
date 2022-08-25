var reachableNodes = function(n, edges, restricted) {
    let restrictedSet = new Set(restricted)   
    let graph = new Map()
    createGraph(edges, graph)
    return dfs(graph, restrictedSet, 0)
};

function dfs(graph, restrictedSet, curr) {
    if (restrictedSet.has(curr)) return 0
    
    restrictedSet.add(curr)
    
    let res = 1
    for (let neighbor of graph.get(curr)) {
        res += dfs(graph, restrictedSet, neighbor)
    }
    
    return res
}

function createGraph(edges, graph) {
    for (let [a, b] of edges) {
       if (!graph.has(a)) graph.set(a, [])
       if (!graph.has(b)) graph.set(b, [])
        graph.get(a).push(b)
        graph.get(b).push(a)
    }
}

let edges = [[0,1],[1,2],[3,1],[4,0],[0,5],[5,6]]
console.log(reachableNodes(7, edges, [4, 5]))
/*
 * 
    edges = []
 */