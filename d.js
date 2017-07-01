function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

// console.log(getRandomIntInclusive(1, 100));



//1 vong lap -> console.log( //lan mua so bao nhieu, lan mua nay duoc so bn?
const KQ = 11;
let soLan = 0;
let soMuaDuoc;

// do {
//     soMuaDuoc = getRandomIntInclusive(0, 99);
//     console.log('Lan mua ' + ++soLan + ': ' + soMuaDuoc);
// } while (soMuaDuoc !== KQ);

// while (soMuaDuoc !== KQ) {
//     soMuaDuoc = getRandomIntInclusive(0, 99);
//     console.log('Lan mua ' + ++soLan + ': ' + soMuaDuoc);
// }

for (;soMuaDuoc !== KQ;) {
    soMuaDuoc = getRandomIntInclusive(0, 99);
    console.log('Lan mua ' + ++soLan + ': ' + soMuaDuoc);
}