/*
    intially time complexity is O(2^(n+m))
    after memoization, time complexity falls to O(n*m)

    n = {0, 1, 2, ..., n}
    m = {0, 1, 2, ..., m}

    there are n*m distinct permutations of (n, m) so this is how many calls will be
    memoized
*/
function gridTraveler(n, m, memo = {}) {
    let key = n + "," + m
    let revKey = m + "," + n

    if (n === 0 || m === 0) return 0
    if (n === 1 && m === 1) return 1
    if (key in memo) return memo[key]

    memo[key] = gridTraveler(n-1, m, memo) + gridTraveler(n, m-1, memo)
    memo[revKey] = memo[key]
    return memo[key]
}

function gridTravelerTabulated(n, m) {
    if (n === 0 || m === 0) return 0

    let table = new Array(n+1)
        .fill()
        .map(() => new Array(m+1).fill(0))
    
    // base case: for 1 row and 1 col num ways is one
    table[1][1] = 1

    // recursive case: f(n, m) = f(n-1, m) + f(n, m-1)
    for (let r = 1; r < n+1; r++) {
        for (let c = 1; c < m + 1; c++) {
            if (r === 1 && c ===1) continue

            table[r][c] = table[r-1][c] + table[r][c-1]
        }
    }

    return table[n][m]
}

console.log(gridTravelerTabulated(1, 0)) //0
console.log(gridTravelerTabulated(0, 1)) // 0
console.log(gridTravelerTabulated(2, 2)) // 2
console.log(gridTravelerTabulated(8, 9)) // 6435
console.log(gridTravelerTabulated(18, 18)) // 2333606220