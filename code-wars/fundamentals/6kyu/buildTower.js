function towerBuilder(nFloors) {
    // build here 
    const result = []

    const flowers = numOfFlowers(nFloors)
    return flowers.map(f => createFloor(f, nFloors))
}

function numOfFlowers(numFloors) {
    const result = []

    for (let i = 0; i < numFloors; i++) {
        result.push(i*2 + 1)
    }
    return result
}

function createFloor(flowers, nFloors) {
    let result = ""
    let totalSpaces = nFloors*2 -1

    let spacesLeft = (totalSpaces - flowers)/2

    for (let i = 0; i < spacesLeft; i++) {
        result += " "
    }
    for (let i = 0; i < flowers; i++) {
        result += "*"
    }
    for (let i = 0; i < spacesLeft; i++) {
        result += " "
    }
    return result 
}