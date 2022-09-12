function domainName(url) {
    
    const pre1 = url.indexOf('www.');
    const pre2 = url.indexOf('http://');
    const pre3 = url.indexOf('https://');

    let startIdx = 0;

    [pre1, pre2, pre3].forEach((el, i) => {
        if (el !== -1) {
            switch (i) {
                case 0:
                    startIdx += 4;
                    break;
                case 1:
                    startIdx += 7;
                    break;
                case 2:
                    startIdx += 8;
                    break;
            };
        };
    });
    
    for (let i = startIdx; i < url.length; i++) {
        if (url[i] === '.') return url.slice(startIdx, i);
    };
}


console.log(domainName("http://google.com"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("https://youtube.com"));
console.log(domainName('art5hta7ntmx3kdg9ll0qy.name/index.php'));
