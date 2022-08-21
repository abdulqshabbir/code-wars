/**
 * @param {string} num
 * @return {string}
 
    create frequency map of each digit in num
    create a pairs array of digits that are pairs in the frequency map
    sort pairs array in decending order
    create resArray by adding pairs to front and back using sorted pairs
    add largest non-pair in frequency map to middle
    join and return
 
 */
var largestPalindromic = function(num) {
    const freqMap = createFreqMap(num)
    const pairs = createPairsFromFreqMap(freqMap)
    
    pairs.sort((a, b) => b - a)
    
    let resArray = new Array(pairs.length * 2 + 1)
    let l = 0
    let r = resArray.length -1
    
    if (pairs.length > 0 && pairs.find(num => num !== 0)) {
        for (let pair of pairs) {
            resArray[l] = pair
            resArray[r] = pair
            l++
            r--
        }
    }
    
    const highestNonPair = findHighestNonPair(freqMap)
    if (highestNonPair !== -1) {
        resArray[Math.floor(resArray.length/2)] = highestNonPair
    }

    if (num.split("").every(dig => dig === "0")) return "0"
    
    return resArray.map(dig => dig.toString()).join("")
};

function findHighestNonPair(freqMap) {
    let res = -1
    
    for (let digit in freqMap) {
        if (freqMap[digit] % 2 === 1 && Number(digit) > res) res = digit
    }
    
    return res
}

function createPairsFromFreqMap(map) {
    const res = []
    
    for (let digit in map) {
        if (map[digit] > 1) {
            let numOfPairs = Math.floor(map[digit]/2)
            while (numOfPairs > 0) {
                res.push(Number(digit))
                numOfPairs--
            }
        }
    }
    
    return res
}

function createFreqMap(num) {
    let map = {}

    for (let digit of num) {
        if (!(digit in map)) map[digit] = 0

        map[digit]++
    }
    
    return map
}