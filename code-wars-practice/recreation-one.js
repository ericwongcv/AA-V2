function listSquared(m, n) {
    const squares = {}
    const result = [];

    for (let i = 1; i <= n; i++) {
        const factors = findFactors(i);
        const sumSquares = factors.reduce((accu, next) => accu + next ** 2, 0);
        if (i >= m && checkSquare(sumSquares)) {
            result.push([i, sumSquares]);
        }
    }

    return result;
}

function checkSquare(n) {
   return  Number.isInteger(Math.sqrt(n)) ? Math.sqrt(n) : false;
}

function findFactors(n) {
    if (n === 1) return [1];
    let j = n;
    let i = 1;
    const factors = [];

    while (i < j) {
        if (n % i === 0) {
            factors.push(i);
            j = n / i;
            if (i !== j) 
                factors.push(j);
        }
        i++;
    }
    return factors;
}

console.log(listSquared(1, 250), '[[1, 1], [42, 2500], [246, 84100]]');
console.log(listSquared(42, 250), '[[42, 2500], [246, 84100]]');