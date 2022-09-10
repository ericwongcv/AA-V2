// The number 1089 is the smallest one, non palindromic, that has the same prime factors that its reversal. Thus,

// prime factorization of 1089 with 3, 3, 11, 11 -------> 3, 11

// prime factorization of 9801 with  3, 3, 3, 3, 11, 11 -------> 3, 11
// The task for this kata is to create a function same_factRev(), that receives a nMax, to find all the numbers with the above property, bellow nMax.

// the function same_factRev(), will output a sorted list with the found numbers bellow nMax

// Let'se some cases

// same_factRev(1100) -----> [1089]

// same_factRev(2500) -----> [1089, 2178]
// (Palindromic numbers are like: 171, 454, 4224, these ones should be discarded)

// Happy coding!!

// (The sequence of these kind of numbers is registered in OEIS as A110819)

function sameFactRev(nMax) {
    if (nMax < 2) return [nMax];
    const collection = [];
    const primes = new PrimeCollector();

    for (let i = 1; i <= nMax; i++) {
        primes.isPrime(i);
        let reverse = parseInt(i.toString().split('').reverse().join(''));
        if (i !== reverse) {
            ifactors = primes.getPrimeFactors(i);
            revfactors = primes.getPrimeFactors(reverse);
            if (equalArrays(ifactors, revfactors)) collection.push(i);
        }
    }
    
    return collection;
}
function equalArrays(a, b) {
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

class PrimeCollector {
    constructor() {
        this.primes = [2];
        this.length = this.primes.length;
    }

    isPrime(num) {
        if (this.primes.includes(num)) return true;

        if (num === 2) return true;
        if (num < 2 || num % 2 === 0) return false;

        if (num < this.primes[this.primes.length - 1]) return false;
    
        for (let i = 3; i < num; i += 2) {
            if (num % i === 0) {
                return false;
            }
        }
        
        this.primes.push(num);
        return true;
    }

    getPrimeFactors(num) {
        let n = num;
        const prime = [];
        while (n !== 1) {
            for (let i = 0; i <= this.primes.length; i++) {
                if (n % this.primes[i] === 0) {
                    while (n % this.primes[i] === 0) {
                        prime.push(this.primes[i]);
                        n /= this.primes[i];
                    };
                };
            };
            if (n !== 1) {
                for (let i = this.primes[this.length - 1]; i <= n; i++) {
                    this.isPrime(i);
                }
            }
        };

        const set = new Set(prime);
        return Array.from(set);
    }
}


// console.log(isPrime(21));
// console.log(isPrime(71));
// console.log(isPrime(1089));


console.log(sameFactRev(1089))
console.log(sameFactRev(2500))
// console.log(getPrimeFactors(53))
