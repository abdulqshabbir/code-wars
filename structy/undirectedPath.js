/*
    Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.
*/

const undirectedPath = (edges, nodeA, nodeB) => {
    const adjList = buildAdjList(edges)
    return hasPath(adjList, nodeA, nodeB, new Set())
};

function hasPath(graph, current, dest, visited) {
    if (visited.has(current)) return false

    if (current === dest) return true

    visited.add(current)

    for (let neighbour of graph[current]) {
        if (hasPath(graph, neighbour, dest, visited)) {
        return true
        }
    }

    return false
}

function buildAdjList(edges) {
    const adjList = {}

    for (let [a, b] of edges) {
        if (!(a in adjList)) adjList[a] = []
        if (!(b in adjList)) adjList[b] = []
        
        adjList[a].push(b)
        adjList[b].push(a)
    }

    return adjList
}