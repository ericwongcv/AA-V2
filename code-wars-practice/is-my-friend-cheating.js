function removeNb(n) {
    const sum = n * (n + 1) / 2;
    const sol = [];
    const visited = {};

    for (let i = 1; i <= n; i++) {
            const j = (sum - i) / (i + 1)
            
            if (j < n && Number.isInteger(j) && i * j === sum - i - j && !(i in visited)) {
                visited[i] = j;
                sol.push([i, j]);
            };
    };

    return sol;
}

console.log(removeNb(26));
console.log(removeNb(100));
console.log(removeNb(1000003));
