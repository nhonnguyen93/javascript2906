function print() {
    for (let i = 1; i <= 100; i++) {
        const dieuKien = i % 3 === 0;
        if (dieuKien) console.log(i);
    }
}

function print2() {
    for (let i = 1; i <= 100; i++) {
        const dieuKien = i % 3 === 1;
        if (dieuKien) console.log(i);
    }
}

function print3() {
    for (let i = 1; i <= 100; i++) {
        const dieuKien = (Math.sqrt(i) % 1 === 0);
        if (dieuKien) console.log(i);
    }
}

print3();
