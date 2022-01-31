// To add an element in an array which is Push

var lastBench = ['sathy', 'lathy', 'kathy'];
lastBench.push('mathy');
lastBench.push('chaty');
console.log(lastBench);


// To remove an element from an array, which Pop


var friendsAge = [15, 30, 35, 35];
var lastItem = friendsAge.pop();
console.log(friendsAge);
console.log(lastItem);


// To add an element in the frist of an array we can use ushift()

var numbers = [20, 25, 30, 50];
numbers.unshift(2, 100);

console.log(numbers);


// To remove elements from the first position of an array which is shift()

var serial = [1, 2, 3, 4, 5, 6];
var firstItems = serial.pop();
console.log(firstItems);
console.log(serial);