// fuction
function startFan() {
    console.log('walk towars the switch')
    console.log('turn on the switch')
}

startFan();

console.log("khailam")
console.log("ghumalam")
console.log("gosol korlam")

startFan();


// fuction with return
function bringSingara(taka) {
    console.log('singara anar jnnno bhaia', taka, 'diyeche');
    console.log('mama singara den');

    var singaraPrice = 10;
    var singaraQuantity = taka / 10;
    return singaraQuantity;
}

var singara = bringSingara(100);

console.log('ai nen singara', singara + 'ta');


function bringFood(taka) {
    console.log('i am going to market, I see some fish');

    var perKg = 100;
    var kg = taka / perKg;

    return kg;

}

var fish = bringFood(1000);

console.log('Nen mama apnar', fish, 'kg')

// fuction with multiple value

// Addition
function twoNumber(number1, number2) {
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
}
var firstNumber = 35;
var secondNumber = 47;
twoNumber(firstNumber, secondNumber);
console.log(twoNumber(firstNumber, secondNumber));

// Substraction
function substraction(num1, num2) {
    var total = num1 - num2;
    return total;
}

console.log(substraction(200, 100));

// Multiplication
function multiplication(num1, num2) {
    var total = num1 * num2;
    return total;
}

var multi = multiplication(5, 10);
console.log(multi);

// Division
function division(num1, num2) {
    var total = num1 / num2
    return total;
}

console.log(division(200, 20));


// Modulus

function modulus(num1, num2) {
    var total = num1 % num2;
    return total;
}

var number1 = 10000;
var number2 = 235;

var modu = modulus(number1, number2);
console.log(modu)




function bringFish() {
    console.log(" i will buy a big fish ");
}

bringFish();