/*
Task

    You are at position [0, 0] in maze NxN and you can only
    move in one of the four cardinal directions (i.e. North, East, South, West).
    Return true if you can reach position [N-1, N-1] or false otherwise.

    Empty positions are marked ..
    Walls are marked W.
    Start and exit positions are empty in all test cases.

    visited set: this will keep track of all the nodes that we've visited
    DFS: depth first search (explore one direction as far as you can go and then switch)
    BFS: breadth first search  (explore immediate neighbours, and then their neighbours, ...)
        for BFS we need a queue
        node: [row, col]
        
        visited
            ["0,0"] after level 0
            ["0,0", "0, 1", "1, 0"] after level 1

        queue = [[0, 0]] level 0
        queue = [[1, 0], [0, 1]] level 1
        queue = [[0, 2], [1, 1],[2, 0]] level 2
        queue = [[2, 1], [1, 2]] level 3
        queue = [[2, 2]] last level 4
        queue = [] level 5


    0  1  2
0   .  W  . 
1   .  W  .
2   .  .  . 

function main 
  visited = []
  queue = [[0,0]]
  while (queue.length !== 0) {
    
  }
  return false


function getValidNeighbours(row, col) => array of valid neighbors
    potentialNeighbors = [[row+1, col], [row, col +1],]
*/