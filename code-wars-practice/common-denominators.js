function convertFrac(lst) {
    let comDenom;
    let str = "";

    lst.forEach(pair => {
        if (comDenom === undefined) {
            comDenom = pair[1];
        } else if (comDenom % pair[1] !== 0) {
            comDenom = findCommonMultiple(comDenom, pair[1]);
        }
    });
    
    lst.forEach(pair => {
        const factor = comDenom / pair[1];

        str += `(${pair[0] * factor},${comDenom})`;
    });

    return str;
}

function findCommonMultiple(a, b) {
    let aDup = a;
    let bDup = b;

    while (aDup !== bDup) {
        if (aDup < bDup)
            aDup += a;
        else
            bDup += b;
    }

    return aDup;
}

console.log(findCommonMultiple(2, 3));

var lst = [[1, 2], [1, 3], [1, 4]]
console.log(convertFrac(lst));
