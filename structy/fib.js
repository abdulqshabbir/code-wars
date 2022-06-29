
function fibonacci(n, memo = new Map()) {
    if (memo.has(n)) return memo.get(n)
    if (n <= 2) return 1

    memo.set(n, fibonacci(n-1, memo) + fibonacci(n-2, memo))

    return memo.get(n)
}


function fibonacciTabulated(n) {
    let table = new Array(n+1)

    // base cases
    table[0] = 0
    table[1] = 1

    // recursive case in tabular form
    for (let i = 2; i < n+1; i++) {
        table[i] = table[i-1] + table[i-2]
    }
    return table[n]
}