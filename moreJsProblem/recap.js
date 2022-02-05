function largestElemet(number) {
    let largest = number[0];

    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
let numbers = [29, 40, 45, 20, 49, 70];
console.log(largestElemet(numbers))

function lowestElemet(number) {
    let lowest = number[0];

    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}

console.log(lowestElemet(numbers))


function evenNumber(number) {
    let even = [];
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (element % 2 == 0) {
            even.push(element);
        }
    }
    return even;
}

console.log(evenNumber(numbers))


function oddNumber(number) {
    let odd = [];
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (element % 2 != 0) {
            odd.push(element);
        }
    }
    return odd;
}
console.log(oddNumber(numbers))