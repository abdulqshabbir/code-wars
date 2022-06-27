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

console.log(gridTraveler(18, 18))