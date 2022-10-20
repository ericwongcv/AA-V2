// Given a number of points on a plane, your task is to find two points with the smallest distance between them in 
// linearithmic O(n log n) time.

// Example
//   1  2  3  4  5  6  7  8  9
// 1  
// 2    . A
// 3                . D
// 4                   . F       
// 5             . C
// 6              
// 7                . E
// 8    . B
// 9                   . G
// For the plane above, the input will be:

// [
//   [2,2], // A
//   [2,8], // B
//   [5,5], // C
//   [6,3], // D
//   [6,7], // E
//   [7,4], // F
//   [7,9]  // G
// ]
// => closest pair is: [[6,3],[7,4]] or [[7,4],[6,3]]
// (both answers are valid)
// The two points that are closest to each other are D and F.
// Expected answer should be an array with both points in any order.

const closestPair = (points) => {
    const xSortArr = points.sort((a, b) => a[0] - b[0]);
    const ySortArr = points.sort((a, b) => a[1] - b[1]);

    const [p1, p2, delta] = recursive(xSortArr, ySortArr);

    return [p1, p2];
}

const recursive = (xSortArr, ySortArr) => {
    const n = xSortArr.length;

    if (n <= 3) {
        return closestPairBrute(xSortArr);
    } else {
        const half = Math.floor(n / 2);
        const midPt = xSortArr[half];

        xSortArrLeft = xSortArr.slice(0, half);
        xSortArrRight = xSortArr.slice(half);
        ySortArrLeft = [];
        ySortArrRight = [];

        for (point of ySortArr) {
            point[0] <= midPt[0] ? ySortArrLeft.push(point) : ySortArrRight.push(point);
        }

        const [p1Left, p2Left, deltaLeft] = recursive(xSortArrLeft, ySortArrLeft);
        const [p1Right, p2Right, deltaRight] = recursive(xSortArrRight, ySortArrRight);

        let [p1, p2, delta] = deltaLeft < deltaRight ? [p1Left, p2Left, deltaLeft] : [p1Right, p2Right, deltaRight];

        const strip = [];

        for (point of ySortArr) {
            if (midPt[0] - delta < point[0] && midPt[0] + delta > point[0])
                strip.push(point);
        }

        for (let i = 0; i < strip.length; i++) {
            for (let j = i + 1; j < Math.min(i + 7, strip.length); j++) {
                const d = dist(strip[i], strip[j]);
                if (d < delta) {
                    [p1, p2, delta] = [strip[i], strip[j], d];
                }
            }
        }
        return [p1, p2, delta];
    }
}

const dist = (pt1, pt2) => {
    const [x1, y1] = pt1;
    const [x2, y2] = pt2;

    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

const closestPairBrute = (points) => {
    let closest = [];
    let shortestDist = Infinity;

    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const d = dist(points[i], points[j]);
            if (d < shortestDist) {
                shortestDist = d;
                closest = [points[i], points[j], shortestDist];
            };
        };
    };

    return closest;
}

var points = [
    [2, 2], // A
    [2, 8], // B
    [5, 5], // C
    [6, 3], // D
    [6, 7], // E
    [7, 4], // F
    [7, 9]  // G
];

console.log(closestPair(points));     // [[6,3],[7,4]] or [[7,4],[6,3]]

points = [[2, 2], [2, 8]];

console.log(closestPair(points));

points = [
    [2, 2], [2, 8],
    [5, 5], [5, 5],
    [6, 3], [6, 7],
    [7, 4], [7, 9]
];

console.log(closestPair(points));

points = [
    [-4.229001691457743, 27.217601245713016],
    [7.566559993922912, 43.79856295440022],
    [9.886386710820824, -8.979840806101535],
    [-0.724405858334384, 52.69795539326438],
    [11.750193849735705, -1.235556956211255],
    [10.911468827094039, 15.606266379665726],
    [-0.5368292970349398, -4.508115397010226],
    [-21.468071429358677, 22.43863912531029],
    [21.933031816434912, 33.16171631538034],
    [-2.896784056364016, 9.456558243631365],
    [-28.422995127680736, 15.30729072352478],
    [-0.4801525727905478, 39.08503713312162],
    [-17.34445671478226, 8.478375175769042],
    [-14.825915541380446, 31.406129558338993],
    [17.368786730654755, 24.06044560058502],
    [10.571014670202112, 30.55789319943574],
    [6.8797911700645304, 3.686027619113318],
    [33.573254516589444, 24.012208831475817],
    [-11.054045293421343, 41.1676272732999],
    [-12.73548114356645, 3.3003043905267404],
    [7.904723250190618, 41.92832705312562],
    [20.952330467734466, 6.621951476832855],
    [-14.558176229830693, 16.64299400054623],
    [1.981360775747472, 18.62718133680748],
    [14.833640017909714, 39.38990457373686],
    [23.627973375106677, 15.872095003811047]
]

console.log(closestPair(points));