function factorial(number) {
    let factor = 1;
    for (let i = 1; i <= number; i++) {
        factor = factor * i;
    }
    return factor;
}

// console.log(factorial(7));

function factorialRecursion(number) {
    if (number == 1) {
        return 1;
    }
    return number * factorialRecursion(--number);
}
// console.log(factorialRecursion(7))


const factRecurtion = (i) => {
    if (i == 1) {
        return 1;
    }
    return i * factRecurtion(--i)
}
// console.log(factRecurtion(5));


const sentence = 'hello, how are you'
let reverse = ''
for (let i = 0; i < sentence.length; i++) {
    reverse = sentence[i] + reverse
}
// console.log(reverse);

const strReverse = sentence => {
    let reverse = ''
    for (const character of sentence) {
        reverse = character + reverse
    }
    return reverse
}
// console.log(strReverse(sentence));


const factorilaRecursion = number => {
    if (number == 1) {
        return 1;
    }
    return number * factorialRecursion(--number)
}
// console.log(factorialRecursion(5));