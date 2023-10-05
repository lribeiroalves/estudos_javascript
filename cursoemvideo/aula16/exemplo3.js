function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

//RECURSIVIDADE
function fatorialRecursivo(n=1) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorialRecursivo(n-1)
    }
}

console.log(fatorial(0))
console.log(fatorialRecursivo(1))