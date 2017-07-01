const troiMua = true;

if (troiMua) {
    console.log('Khong di hoc');
} else {
    console.log('Di hoc');
}

// 0 -> sunday
// 1 -> monday
// 2 ->> tuesday
const index = 2;

switch (index) {
    case 0:
        console.log('Sunday');
        break;
    case 1: 
        console.log('Monday');
        break;
    case 2: 
        console.log('Tuesday');
        break;
    default:
        console.log('Thurday');
        break;
}
