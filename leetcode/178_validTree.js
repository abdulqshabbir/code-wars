class Solution {
    /**
     * @param n: An integer
     * @param edges: a list of undirected edges
     * @return: true if it's a valid tree, or false
     */
    
  
    validTree(n, edges) {
      function getParent(node, parent) {
        while (parent[node] !== -1) {
          node = parent[node]
        }
        return node
      }
      let parent = new Array(edges.length + 1).fill(-1)
  
      for (let [v1, v2] of edges) {
        let p1 = getParent(v1, parent)
        let p2 = getParent(v2, parent)
  
        if (p1 === p2) return false
            
        parent[p1] = p2
      }
      return true
    }
}

let s = new Solution()

console.log(s.validTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]]))