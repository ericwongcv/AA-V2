function topThreeWords(text) {
    text = text.split(/[^[a-zA-Z-']/);
    hash = {};
    let [first, second, third] = ['', '', ''];
    hash[""] = 0;
    text.forEach(word => {
        if (word === "" || word.search(/[a-zA-Z]/) === -1) return;
        word = word.toLowerCase();
        hash[word] ? hash[word]++ : hash[word] = 1;

        if ([first, second, third].includes(word)) {
            if (hash[second] < hash[third]) [second, third] = [third, second];
            if (hash[first] < hash[second]) [first, second] = [second, first];

        } else {
            if (hash[word] > hash[first]) {
                third = second;
                second = first;
                first = word;
            } else if (hash[word] > hash[second]) {
                third = second;
                second = word;
            } else if (hash[word] > hash[third]) {
                third = word;
            }
        }
    });

    const sol = [first, second, third];

    while (sol.includes("")) {
        sol.pop();
    }

    return sol;
}

console.log(topThreeWords("In a village of La Mancha, the name of which I have no desire to call to\
    mind, there lived not long since one of those gentlemen that keep a lance\
    in the lance-rack, an old buckler, a lean hack, and a greyhound for\
    coursing. An olla of rather more beef than mutton, a salad on most\
    nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra\
    on Sundays, made away with three-quarters of his income."))

console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"));

console.log(topThreeWords("  //wont won't won't "))
