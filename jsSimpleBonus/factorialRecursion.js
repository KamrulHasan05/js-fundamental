function factorial(number) {
    let factor = 1;
    for (let i = 1; i <= number; i++) {
        factor = factor * i;
    }
    return factor;
}

console.log(factorial(7));

function factorialRecursion(number) {
    if (number == 1) {
        return 1;
    }
    return number * factorialRecursion(--number);
}
console.log(factorialRecursion(7))