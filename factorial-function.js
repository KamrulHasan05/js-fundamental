function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
let getFact = getFactorial(3);
console.log(getFact)


function getFactorial2(number) {
    let factorail = 1;
    for (let i = 1; i <= number; i++) {
        factorail = factorail * i;
    }
    return factorail
}

let secondFactor = getFactorial2(7);
console.log(secondFactor);

let thirdFactor = getFactorial2(5);
console.log(thirdFactor);