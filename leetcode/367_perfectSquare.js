/*
    Given a positive integer num, write a function which returns True if num is a perfect square else False.
    Follow up: Do not use any built-in library function such as sqrt.
*/

var isPerfectSquare = function(num) {
    for (let i = 1; i <= num; i++) {
        if (i * i === num) {
            return true
        }
        if (i * i  > num) {
            return false
        }
    }
};

var isPerfectSquare = function(num) {
    return isSquareRecurse(num, 1, num)
}

function isSquareRecurse(num, l, r) {
    if (l > r) {
        return false
    }
    let m = Math.floor((l + r)/2)
    if (num === m * m) {
        return true
    }
    if (num > m * m) {
        return isSquareRecurse(num, m + 1, r)
    } else {
        return isSquareRecurse(num, l, m - 1)
    }
}

var isPerfectSquare = function(num) {
    let l = 1
    let r = num
    let m

    while (l <= r) {
        m = Math.floor((l+r)/2)

        if (m * m === num) {
            return true
        }

        if (m * m < num) {
            l = m + 1
        }
        else {
            r = m - 1
        }
    }
    return false
};