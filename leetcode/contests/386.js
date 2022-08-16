var lexicalOrder = function(n) {
    const res = []

    for (let curr = 1; curr < 10; curr++) {
        dfs(curr, n, res)
    }
    return res
};

function dfs(curr, n, res) {// curr = 1000
    if (curr > n) return

    res.push(curr)

    for (let i = 0; i < 10; i++) {
        if (curr * 10 + i <= n) {
            dfs(curr*10 + i, n, res)
        }
    }
}

console.log(lexicalOrder(111))
