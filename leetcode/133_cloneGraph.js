var cloneGraph = function(node) {
    if (node === null) return null
    
    let oldToNew = new Map()
    
    function cloneRecursively(node) {
        if (oldToNew.has(node)) {
            return oldToNew.get(node)
        }
        let newNode = new Node()
        oldToNew.set(node, newNode)
        
        for (let n of node.neighbors) {
            newNode.neighbors.push(cloneRecursively(n))
        }
        
        return oldToNew.get(node)
    }
    
    return cloneRecursively(node)
};

function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};

let n1 = new Node(1)
let n2 = new Node(2)
n1.neighbors.push(n2)
n2.neighbors.push(n1)

cloneGraph(n1)