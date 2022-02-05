function oldest(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const age = [20, 25, 30, 45, 35, 60];
// console.log(oldest(age));


function minusLargest(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const minuseAge = [-2, -5, -1, -8, -9];
// console.log(minusLargest(minuseAge))


function lowNumber(numbers) {
    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}

// console.log(lowNumber(age))



function secondLargestElement(numbers) {
    let largest = numbers[0];
    let secondLargest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > largest) {
            secondLargest = largest;
            largest = element
        } else if (element > secondLargest) {
            secondLargest = element;
        }

    }
    return secondLargest;
}
let second = [85, 29, 47, 79, 32, 39, 70, 35, 27, 72, 90]
console.log(secondLargestElement(second))

// function numberSecond(numbers) {
//     let lowest = numbers[0];
//     let secondLowest = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         let element = numbers[i];
//         if (element < secondLowest) {
//             secondLowest = element;

//         } else if (element > lowest) {
//             secondLowest = lowest;
//             lowest = element;
//         }
//     }
//     return secondLowest;
// }

// console.log(numberSecond(second));



// let third = [20, 35, 28, 40, 45, 12, 22, 18, 16];

// function thirdLowestElemet(numbers) {
//     let lowest = numbers[0];
//     let secondLowest = numbers[0];
//     let thirdLowest = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         let element = numbers[i];
//         if (element < lowest) {
//             thirdLowest = secondLowest
//             secondLowest = lowest;
//             lowest = element;
//         } else if (element < secondLowest) {
//             thirdLowest = secondLowest;
//             secondLowest = element;
//         } else if (element < thirdLowest) {
//             thirdLowest = element;
//         }
//     }
//     return thirdLowest;
// }


// console.log(thirdLowestElemet(third));