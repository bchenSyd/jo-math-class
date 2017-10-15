const blackList = [100, 1, 99, 0];
const randomGen = () => {
    let random;
    do {
        random = Number((Math.random() * 100).toFixed());
    } while (blackList.includes(random))
    return random;
}
const mathGen = () => {
    const result = [];
    Array.from({ length: 10 }, () => {
        let random;
        do {
            random = randomGen();
        } while (result.find(r => r[0] === random))
        result.push([random, 99 - random]);
    });
    return result;
}

export { mathGen };