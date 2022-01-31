// Numeric Variable
var price = 20;
var age = 13;
var temperature = 37;

console.log(age);

// String Variable
var name = "Rony";
var address = "Dhaka";

console.log("name");

// Boolean Variable
var relationStatus = false;

console.log(relationStatus);


var hello = "hello World";

console.log(hello.length);


var numberString = "10";

var number = parseInt(numberString);

console.log(numberString);
console.log(number);



var num1 = .1;
var num2 = .2;
var total = num1 + num2;

var numFloat = parseFloat(total.toFixed(1));

console.log(numFloat);


var teacher = ['bodrul', 'sharif', 'mahbub', 'sabbir'];

console.log(teacher.length);

console.log(teacher);

teacher.push('aynul', 'farid');

console.log(teacher);

teacher.unshift('Shorab', 'gobindo');

console.log(teacher);


var madam = ['samina', 'sharmin', 'laila', 'nasrin', 'najifa'];
console.log(madam);

var deleteMam = madam.pop();
console.log(madam);
console.log(deleteMam);

var cutMam = madam.shift();

console.log(madam);
console.log(cutMam);

console.log(madam.indexOf('samina'));
console.log(madam.indexOf('sharmin'));
console.log(madam.indexOf('nasrin'));

console.log(teacher[2]);

teacher[2] = 'Rony';

console.log(teacher);