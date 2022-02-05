const greetings = 'Hello, how are you';

function reverseString(sentence) {
    let reverse = '';
    for (const character of sentence) {
        reverse = character + reverse;
    }
    return reverse;
}

console.log(reverseString(greetings));


const love = 'I Love You Sathi, You are my babe';

function loveReverse(sentence) {
    let reverse = '';
    for (const character of sentence) {
        reverse = character + reverse;
    }
    return reverse;
}
console.log(loveReverse(love))

