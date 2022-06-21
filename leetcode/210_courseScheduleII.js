/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

 function buildGraph(edges, numCourses) {
    let graph = new Map()
    
    for (let i = 0; i < numCourses; i++) {
        graph.set(i, [])
    }
    
    for (let [a,b] of edges) {
        if (!graph.has(a)) graph.set(a, [])
        if (!graph.has(b)) graph.set(b, [])
        
        graph.get(a).push(b)
    }
    
    return graph
}

function detectCycle(node, visited, graph) {
    if (visited[node] === 1) {
        return true
    }
    visited[node] = 1
    
    for (let neighbor of graph.get(node)) {
        if (detectCycle(neighbor, visited, graph)) {
            return true
        }
    }
    
    visited[node] = 2
    
    return false
}

function topologicalSort(node, graph, visited, revStack) {
    if (visited[node] === true) return
    
    visited[node] = true
    
    for (let neighbor of graph.get(node)) {
        topologicalSort(neighbor, graph, visited, revStack)
    }
    
    revStack.push(node)
    
    return revStack
}

var findOrder = function(numCourses, prerequisites) {
    let graph = buildGraph(prerequisites, numCourses)
    let visited = new Array(numCourses).fill(0) 
    
    for (let node of graph.keys()) {
        if (visited[node] === 0) {
            if (detectCycle(node, visited, graph)) {
                return []
            } 
        }
    }
    
    let res = []
    let visited2 = new Array(numCourses).fill(false)
    
    for (let node of graph.keys()) {
        if (visited2[node] === false) {
             topologicalSort(node, graph, visited2, res)
        } 
    }
    
    return res
};