var i = 1;
while (i <= 100) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}
var k = 1;
while (k <= 100) {
    if (k % 2 == 1) {
        console.log(k)
    }
    k++;
}

// odd even by function
function isEven(number) {
    if (number % 2 == 0) {
        return 'This is an Even Number'
    } else {
        return 'This is an odd number'
    }
}

const number1 = 1550009;
const isNumberEven = isEven(number1)
console.log(isNumberEven)


const number2 = 2440;
const isMyNumber = isEven(number2)
console.log(isMyNumber)


function isOdd(number) {
    if (number % 2 != 0) {
        return true;
    } else {
        return false;
    }
}

const number3 = 45;
const myOddNumber = isOdd(number3)
console.log('is the number odd?', myOddNumber)

const number4 = 44;
const isOddNumber = isOdd(number4)
console.log('is the number odd?', isOddNumber)