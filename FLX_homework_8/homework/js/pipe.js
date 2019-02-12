function addOne(x) {
    return x + 1;
}
function pipe() {
    let data = arguments[0]
    for (let i = 1; i < arguments.length; i++) {
        let currentFunc = arguments[i];
        data = currentFunc(data);
    }
    return data
}

pipe(1, addOne);
pipe(1, addOne, addOne); 