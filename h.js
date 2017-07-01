// function add(a, b) {
//     return a + b;
// }

// console.log(add(4, 5));

// const a = console.log;

// a(100);

function getLog() {
    return console.log;
}

getLog()(100);
