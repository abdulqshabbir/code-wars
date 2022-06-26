
function fibonacci(n, memo = new Map()) {
    if (memo.has(n)) return memo.get(n)
    if (n <= 2) return 1

    memo.set(n, fibonacci(n-1, memo) + fibonacci(n-2, memo))

    return memo.get(n)
}

console.log(fibonacci(50))