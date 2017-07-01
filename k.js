function print(check) {
    for (let i = 1; i <= 100; i++) {
        const dieuKien = check(i);
        if (dieuKien) console.log(i);
    }
}

function kiemTraChiaHet3(x) {
    return x % 3 === 0;
}

function kiemTraChinhPhuong(x) {
    return Math.sqrt(x) % 1 === 0;
}

print(kiemTraChinhPhuong);
