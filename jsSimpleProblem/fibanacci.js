// fibonacci, we have to catch the value of i = 2
const numbers = [0, 1];
let sum = 0;
for (let i = 2; i <= 10; i++) {
    numbers[i] = numbers[i - 1] + numbers[i - 2];
    sum = sum + numbers[i]
}
console.log(numbers, sum)

function fibonacciSeries(num) {
    if (typeof num != 'number') {
        return 'please give a number';
    } else if (num < 2) {
        return 'please give positive number and greater than 1'
    }
    const fibo = [0, 1];
    for (let i = 2; i < num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

console.log(fibonacciSeries(2));