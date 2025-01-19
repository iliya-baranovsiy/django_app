function calculate(arr) {
    let currency = 0;

    if (arr[0] === 'banana.png' && arr[1] === 'banana.png' && arr[2] === 'banana.png') {
        currency += 100;
    } else if (arr[0] === 'grape.png' && arr[1] === 'grape.png' && arr[2] === 'grape.png') {
        currency += 95;
    } else if (arr[0] === 'cherry.png' && arr[1] === 'cherry.png' && arr[2] === 'cherry.png') {
        currency += 105;
    } else if (arr[0] === 'banana.png' && arr[1] === 'banana.png') {
        currency += 30;
    } else if (arr[0] === 'grape.png' && arr[1] === 'grape.png') {
        currency += 25;
    }

    return currency;
}

export { calculate };