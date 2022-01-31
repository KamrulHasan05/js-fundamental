var price1 = 40;
var price2 = 20;

var sum = price1 + price2;
var sub = price1 - price2;
var mult = price1 * price2;
var divi = price1 / price2;
var mod = price1 % price2;

console.log(sum);
console.log(sub);
console.log(mult);
console.log(divi);
console.log(mod);

price1 = price1 + 20;

console.log(price1);

price2 *= 5;

console.log(price2);

var age = 20;
age++;

console.log(age);

var love = 100;
love = love - 1;
love -= 1;
love--;

console.log(love);


// To short Float number, toFixed is used

var firstNumber = 0.1;
var lastNumber = 0.2;
var totalNumber = firstNumber + lastNumber;
totalNumber = totalNumber.toFixed(1);
totalNumber = parseFloat(totalNumber);
totalNumber = Math.ceil(totalNumber);
console.log(totalNumber);


// Quiz practice


// modulus
var mangoes = 17;
var eater = 5;

var totaldivide = mangoes % eater;

console.log(totaldivide);

var num1 = "99.5";
var num2 = 15;

console.log(num1 + num2);