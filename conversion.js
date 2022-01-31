var firstName = "Ariana";
var lastName = "Grande";
var fullName = firstName + ' ' + lastName;

console.log(fullName);

var first = "Sathy";
var last = "khatun";
var name = first + ' ' + last;

console.log(name);

// parseInt and parseFloat both are used to convert string number value to numeric number value
var price = "42";
var price2 = "45";

console.log(price + price2);

var priceNumber = parseInt(price);
console.log(priceNumber);

var price2Number = parseInt(price2);

console.log(price2Number);

console.log(priceNumber + price2Number);


var eggPrice = "42.44";

var eggPrinceNumber = parseFloat(eggPrice);

console.log(eggPrinceNumber);

var celing = Math.ceil(eggPrice);

console.log(celing);

var floor = Math.floor(eggPrice);

console.log(floor);


// To lowercase the paragraph

var paragraph = "Hello Rony";
var paraLower = paragraph.toLowerCase();

console.log(paraLower);