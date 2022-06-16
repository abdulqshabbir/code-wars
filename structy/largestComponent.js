const largestComponent = (graph) => {
    const visited = new Set()
    let maxComponentSize = 0
    
    for (let node in graph) {
        const size = getComponentSize(graph, node, visited)
        maxComponentSize = Math.max(size, maxComponentSize)
    }
    
    return maxComponentSize
};
  
function getComponentSize(graph, src, visited) {
    let result = 0

    if (visited.has(src.toString())) return 0
    
    for (let neighbour of graph[src]) {
        result += getComponentSize(graph, neighbour, visited)
    }
}

largestComponent({
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
}); // -> 4