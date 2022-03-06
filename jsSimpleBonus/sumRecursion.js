let sum = 0;

for (let i = 5; i >= 1; i--) {
    sum = sum + i;
}
// console.log(sum)


function sumRecursion(i) {
    if (i == 1) {
        return 1;
    }
    return i + sumRecursion(--i)
}
console.log(sumRecursion(5))

console.log("123" + 123);