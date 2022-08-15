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
            [[0, 0]] after level 0

        queue = [[0, 0]] level 0
        queue = [[1, 0], [0, 1]] level 1
        queue = [[0, 2], [1, 1],[2, 0]] level 2
        queue = [[2, 1], [1, 2]] level 3
        queue = [[2, 2]] last level 4
        queue = [] level 5


    0  1  2
0   .  .  . 
1   .  .  .
2   .  W  . 

BFS:
[0, 0]
[0, 1], [1, 0]
[0, 2], [2, 2], [2, 0]


queue = [[0, 0]]
queue = []
queue = [[0, 1], [1, 0]]

function main 
  N = maze.length
  visited = []
  queue = [[0,0]]
  while (queue.length !== 0) {
    const [row, col] = queue.shift() // visit maze[row][col]
    if (row === N-1 && col === N-1) { // win check
        return true
    }
    let neighbors = getValidNeighbors(row, col)
    queue.concat(neighbors) // add neighbors to visit next
  }
  return false


function getValidNeighbours(row, col) => [[0, 1], [1, 0]]
    return [[row+1, col], [row, col +1]].filter([row, col] => {
        return !isWall(row, col) && inBounds(row, col) && !visited(row, col)
    }) 

function isWall(row, col) {
    reutrn max[row][col] === "W"
}

function inBounds (row, col) {
    return row <= N-1 && col <= N-1
}

function visited(row, col) {
    for each [visitedRow, visitedCol] in visited
        if (row === visitedRow and col ==== visitedCol) return true

    visited.push([row, col])
    return false
}


*/

function pathFinder(maze){
    maze = maze.split("\n").map(cell => [...cell])

    let N = maze.length
    const visitedNodes = new Set()
    let queue = [[0, 0]]

    while (queue.length !== 0) {
      const [row, col] = queue.shift() // visit maze[row][col]
      if (row === N-1 && col === N-1) { // win check
          return true
      }
      let neighbors = getValidNeighbours(row, col)
      queue = queue.concat(neighbors) // add neighbors to visit next
    }
    
    function getValidNeighbours(row, col) {
        return [[row+1, col], [row, col +1], [row-1, col], [row, col-1]].filter(([row, col]) => {
            return inBounds(row, col) && !isWall(row, col) && !visited(row, col)
        })  
    }
    
    function inBounds (row, col) {
        return row >= 0 && row <= N-1 && col >=0 && col <= N-1
    }

    function isWall(row, col) {
        return maze[row][col] === "W"
    }

    function visited(row, col) {
        const key = `${row},${col}`
        if (visitedNodes.has(key)) return true;
        visitedNodes.add(key);
        return false;
    }
    return false;
}

pathFinder(`....WWW.
WW.W.W..
.W..WW..
W...W..W
W...W...
..W...W.
.W....W.
....WW..`) // len(str) = 9, so 3 x 3
/*
    [
        [".W."],
        [".", "W", "."],
        [".", ".", "."]
    ]

    [ '.W.', '.W.', '...' ].map(x => [...x])
    [ [ '.', 'W', '.' ], [ '.', 'W', '.' ], [ '.', '.', '.' ] ]
*/