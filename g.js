const soDong = 5;

const soCot = soDong * 2 - 1;

for (let i = 1; i <= soDong; i++) {
    let str = '';
    let k = 1;
    for (let j = 1; j <= soCot; j++) {
        const dieuKien = Math.abs(j - soDong) < i;
        str += dieuKien ? k++ : ' ';
    }
    console.log(str);
}
