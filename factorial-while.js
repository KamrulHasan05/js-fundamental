function getFactorial(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

let getFact = getFactorial(5);
console.log(getFact);


// factorial decrement

function secondFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

let secondFact = secondFactorial(7);
console.log(secondFact);


function thirdFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
let thirdFact = thirdFactorial(6);
console.log(thirdFact)



function factorial1(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}

let getFact1 = factorial1(3);
console.log(getFact1)