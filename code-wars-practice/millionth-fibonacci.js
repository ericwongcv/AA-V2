// In this kata you will have to calculate fib(n) where:

// fib(0) := 0
// fib(1) := 1
// fin(n + 2) := fib(n + 1) + fib(n)
// Write an algorithm that can handle n up to 2000000.

// Your algorithm must output the exact integer answer, to full precision. 
// Also, it must correctly handle negative numbers as input.

function fib(n, memo = {}) {
    if (n === 0) return 0n;
    if (n === 1) return 1n;

    if (n < 0) {
        const nextTwo = memo[n + 2] ? memo[n + 2] : fib(n + 2);
        const nextOne = memo[n + 1] ? memo[n + 1] : fib(n + 1);
        memo[n] = nextTwo - nextOne;
        return memo[n];
    } else {
        const prevTwo = memo[n - 2] ? memo[n - 2] : fib(n - 2);
        const prevOne = memo[n - 1] ? memo[n - 1] : fib(n - 1);
        memo[n] = prevOne + prevTwo;
        return memo[n];
    }

    // n = n.toString();
    // const sol = (('1' + Math.sqrt('5').toString()) / 2) ** (n) / Math.sqrt('5').toString() - (('1' - Math.sqrt('5').toString()) / '2') ** (n) / Math.sqrt('5').toString();
    // console.log(typeof sol)
    // return Math.floor(sol);
}

console.log(fib(10));