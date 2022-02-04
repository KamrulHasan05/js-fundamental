// to find the largest number of three number 

function findLargest(number1, number2, number3) {
    if (number1 > number2 && number1 > number3) {
        let biggest = number1 + ' is biggest number'
        return biggest;
    } else if (number2 > number1 && number2 > number3) {
        let biggest = (number2)
        return biggest;
    } else {
        let biggest = number3 + ' is the biggest number'
        return biggest;
    }
}
// console.log(findLargest(60, 40, 50));

// To find the largest numeber
function biggestNumber(number1, number2, number3) {
    let biggest = Math.max(number1, number2, number3);
    return biggest;
}
// console.log(biggestNumber(60, 40, 80))

let num = [20, 30, 40, 50, 60];

function arrLargest(number) {
    let all;
    for (let i = 0; i < number.length; i++) {
        console.log(i);
        let show = number[i];
        all = show;
    }
    return all;
}
console.log(arrLargest(num))