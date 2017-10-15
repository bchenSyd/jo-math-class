
const randomGen = () => {
    const checkNumber = num => {
        if (num % 4 === 0) {
            // 25% chance we don't enforce difficulty level
            return true;
        }
        return num % 10 >= 5;
    }
    const min = 15, max = 49;
    let random;
    do {
        random = Number((Math.random() * (max - min) + min).toFixed());
        debugger;
    } while (!checkNumber(random))
    debugger;
    return random;
}
const mathGen = () => {
    const results = [];
    Array.from({ length: 20 }, () => {
        let random;
        random = randomGen();
        results.push(random);
    });
    return Array.from({ length: 10 }, (e, i) => [results[i], results[10 + i]])
}

export { mathGen };