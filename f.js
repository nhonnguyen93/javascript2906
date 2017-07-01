for (let i = 1; i < 9; i++) {
    let str = '';
    for(let j = 1; j < 9; j++) {
        str += (j < 9 - i) ? ' ' :  i - 8 + j;
    }
    console.log(str);
}

// i = 8
// j = 1
// max = 9

// i = 1
// j = 8
// max = 9