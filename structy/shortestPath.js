const shortestPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges)
    const visited = new Set()
    const queue = [ {node: nodeA, dist: 0} ]
    
    while (queue.length > 0) {
      let { node: current, dist } = queue.shift()
      visited.add(current)
      if (current === nodeB) return dist
      
      console.log("current", current)
      console.log("graph", graph)
      
      for (let neighbour of graph[current]) {
        if (!visited.has(neighbour)) {
          queue.push({ node: neighbour, dist: 1 + dist })
        }
      }
    }
    
    return -1
  };
  
function buildGraph(edges) {
    let graph = {}
    
    for (let [a, b] of edges) {
      if (!(a in graph)) graph[a] = []
      if (!(b in graph)) graph[b] = []
      
      graph[a].push(b)
      graph[b].push(a)
    }
    
    return graph
}