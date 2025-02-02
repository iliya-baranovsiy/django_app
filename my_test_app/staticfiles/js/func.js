function calculate(arr) {
    let currency = 0;

    if (arr[0] === 'kayn.jpg' && arr[1] === 'kayn.jpg' && arr[2] === 'kayn.jpg') {
        currency += 110;
    } else if (arr[0] === 'ryb.jpg' && arr[1] === 'ryb.jpg' && arr[2] === 'ryb.jpg') {
        currency += 95;
    } else if (arr[0] === 'chem (2).jpg' && arr[1] === 'chem (2).jpg' && arr[2] === 'chem (2).jpg') {
        currency -= 50 ;
    } else if (arr[0] === 'kayn.jpg' && arr[1] === 'kayn.jpg') {
        currency += 40;
    } else if (arr[0] === 'ryb.jpg' && arr[1] === 'ryb.jpg') {
        currency += 35;
    }
    else if (arr[1] === 'kayn.jpg' && arr[2] === 'kayn.jpg') {
        currency += 20
    }
    else if (arr[1] === 'ryb.jpg' && arr[2] === 'ryb.jpg') {
        currency += 15
    }
    else if (arr[1] === 'chem (2).jpg' && arr[2] === 'chem (2).jpg') {
        currency += 25
    }


    return currency;
}

export { calculate };