function isValidWalk(walk) {
    const netDirection = [0, 0]
    
    for (let dir of walk) {
      netDirection[0] += convertDirToVector(dir)[0]
      netDirection[1] += convertDirToVector(dir)[1]
    }
    
    console.log(walk)
    console.log(netDirection)
    
    return netDirection[0] === 0 && netDirection[1] === 0 && walk.length === 10
  }
  
function convertDirToVector(dir) {
if (dir === 'n') {
    return [0, 1]
} else if (dir === 's') {
    return [0, -1]
} else if (dir === 'w') {
    return [-1, 0]
} else if (dir === 'e') {
    return [1, 0]
}
}