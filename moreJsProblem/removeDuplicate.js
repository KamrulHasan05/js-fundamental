const names = ['karim', 'karim', 'rahim', 'sarim', 'rahim', 'sarim', 'rahim', 'rony', 'sathy', 'rony', 'sathy', 'rahim', 'habib', 'faruk'];

function removeDuplicateName(name) {
    let unique = [];

    for (let i = 0; i < name.length; i++) {
        let element = name[i];
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

console.log(removeDuplicateName(names));

const numbers = [20, 35, 40, 30, 49, 20, 50, 35, 40, 90, 70]

function removeduplicateNumber(number) {
    let unique = [];
    for (const element of number) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

console.log(removeduplicateNumber(numbers))


function duplicateNameRemove(name) {
    let unique = [];
    for (const element of name) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

console.log(duplicateNameRemove(names))