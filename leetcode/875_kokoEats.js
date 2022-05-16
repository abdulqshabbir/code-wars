function kokoCanEat(piles, h, speed) {
    let i = 0
    // speed = 5
    // piles = [1, 5, 9]
    while (i < piles.length && h >0) {
        let timeToEat = Math.ceil(piles[i]/speed)
        h -= timeToEat
        i++
    }

    if (i >= piles.length) return true

    return false
}

var minEatingSpeed = function(piles, h) {
    let lowSpeed = 1
    let highSpeed = Math.max(...piles)
    let k = highSpeed

    while (lowSpeed <= highSpeed) {
        let midSpeed = Math.floor((lowSpeed + highSpeed)/2)

        if (kokoCanEat(piles, h, midSpeed)) {
            if (midSpeed < k) k = midSpeed 
            highSpeed = midSpeed - 1
        } else {
            lowSpeed = midSpeed + 1
        }
    }
    return k
};

minEatingSpeed([3,6,7,11], 8)