const connectedComponentsCount = (graph) => {
    const visited = new Set()
    let result = 0
    
    for (let node in graph) {
      if (explore(graph, node, visited)) {
        result++
      }
    }
    
    return result
  };
  
  function explore(graph, current, visited) {
    if (visited.has(current.toString())) return false
    
    visited.add(current.toString())
    
    for (let neighbour of graph[current]) {
      if (!visited.has(neighbour.toString())) {
        explore(graph, neighbour, visited)
      }
    }
    
    return true
  }