// Array Sum
let numberSet = [20, 30, 40, 50, 60];
let sum = 0;

for (let i = 0; i < numberSet.length; i++) {
    let element = numberSet[i]
    sum = sum + numberSet[i];
}

console.log(sum)


function sumArray(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        sum = sum + number[i];
    }
    return sum;
}

console.log(sumArray(numberSet));