function randomAnswer(arr) {
    let idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

export { randomAnswer };
