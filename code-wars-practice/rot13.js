function rot13(str) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let newStr = "";

    str.split("").forEach(letter => {
        const i = letters.indexOf(letter.toLowerCase());
        if (i === -1) {
            newStr += letter;
        } else {
            const newI = (i + 13) % 26;
            newStr += letter === letter.toUpperCase() ? letters[newI].toUpperCase() : letters[newI];
        }
    });

    console.log(newStr)
    return newStr;
}

console.log(rot13("EBG13 rknzcyr."));
