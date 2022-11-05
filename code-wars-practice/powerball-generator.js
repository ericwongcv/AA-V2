const generate = () => {
    nums = [];
    while (nums.length < 5) {
        const rand = Math.ceil(Math.random() * 69);
        if (!nums.includes(rand)) 
            nums.push(rand);
    }

    const power = Math.ceil(Math.random() * 26);
    nums.push(power);

    return nums
}

console.log(generate());
