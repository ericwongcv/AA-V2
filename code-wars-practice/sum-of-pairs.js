function sumPairs(ints, s) {
    const store = {};
    let pairs = [];
    
    ints.forEach((el, i) => {
      if (typeof store[el] !== 'number') store[el] = i;
      if (typeof store[s - el] === 'number' && store[s - el] !== i) {
        pairs.push([s - el, el]);
        if (typeof store[s - el] === 'number') store[s - el] = i;
      };
    });
    
    pairs.sort((a, b) => store[a[1]] - store[b[1]]);

    return pairs[0] 
}

console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)) 
