
var amountOfTime = (root, start) => {
    const map = new Map() // node => [neighbors]
    createGraph(root, null, map)
    
    // do a level order traversal of graph starting from infected node
    
    let time = -1
    const queue = [ start.val ]
    const visited = new Set([start.val])
    
    while (queue.length !== 0) {
        const qLength = queue.length
        for (let i = 0; i < qLength; i++) {
            const curr = queue.shift()
            console.log(map)
            for (let neighbor of map.get(curr)) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor)
                    visited.add(neighbor)
                }
            }
        }
        time++
    }
    return time
};


function createGraph(child, parent, map) {
    if (!child) return
    if (!map.has(child.val)) map.set(child.val, [])
    
    if (parent) {
        map.get(parent.val).push(child.val)
        map.get(child.val).push(parent.val)
    } 
    
    createGraph(child.left, child, map) 
    createGraph(child.right, child, map)
}