function buildGraph(edges) {
    let graph = new Map()
    
    for (let [a, b] of edges) {
        if (!graph.has(a)) graph.set(a, [])
        if (!graph.has(b)) graph.set(b, [])
        
        graph.get(a).push(b)
    }
    
    return graph
}

var canFinish = function(numCourses, prerequisites) {
    const graph = buildGraph(prerequisites)
    // 0: unvisited
    // 1: processing
    // 2: processed
    
    const visited = new Array(numCourses).fill(0)
    
    for (let current of graph.keys()) {
        if (visited[current] === 0) {
            if (detectCycle(current, graph, visited)) {
                return false
            }
        }
    }
    return true 
};

function detectCycle(current, graph, visited) {
    if (visited[current] === 1) return true
    
    visited[current] = 1
    for (let neighbor of graph.get(current)) {
        if (visited[neighbor] !== 2) {
            if (detectCycle(neighbor, graph, visited)) {
                return true
            }
        }
    }
    visited[current] = 2
    return false
}