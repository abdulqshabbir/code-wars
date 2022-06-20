export class Solution {
  /**
   * @param rooms: m x n 2D grid
   * @return: nothing
   */
  wallsAndGates(rooms){
    const q = []
    const visited = new Set()
    const ROWS = rooms.length
    const COLS = rooms[0].length

    for (let r = 0; r < rooms.length; r++) {
      for (let c = 0; c < rooms[0].length; c++) {
        if (rooms[r][c] === 0) {
          const pos = r + "," + c
          visited.add(pos)
          q.push([pos, 0])
        }
      }
    }

    while (q.length > 0) {
      let qLength = q.length

      for (let i = 0; i < qLength; i++) {
        let current = q.shift()
        let [r, c] = current[0].split(",").map(Number)
        let distance = current[1]

        if (rooms[r][c] === 2**31 -1) {
          rooms[r][c] = distance
        }

        exploreNeighbor(r-1, c, distance)
        exploreNeighbor(r+1, c, distance)
        exploreNeighbor(r, c-1, distance)
        exploreNeighbor(r, c+1, distance)
      }
    }

    function exploreNeighbor(r, c, distance) {
      const rowInvalid = r < 0 || r === ROWS
      const colInvalid = c < 0 || c === COLS

      if (rowInvalid || colInvalid) return

      if (visited.has(r + "," + c)) return

      if (rooms[r][c] === -1) return

      if (rooms[r][c] === 2 ** 31 -1) {
        const pos = r + "," + c
        visited.add(pos)
        q.push([pos, distance + 1])
        return
      }
    }
  }
}