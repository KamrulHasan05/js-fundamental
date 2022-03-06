let sentence = "hello How are you"
let letters = '';
for (const letter of sentence) {
    letters = letter + letters;

}
// console.log(letters)

// Recursion = if a funtion is called within its function. it's called Recursion

function recursion(i) {
    console.log(i);
    recursion(i + 1);
}
// recursion(1)

// break recursion
function simple(i) {
    if (i > 5) {
        return;
    }
    console.log(i);
    simple(i + 1);
}
simple(1);