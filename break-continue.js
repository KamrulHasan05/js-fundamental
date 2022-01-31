// Break loop
var i = 0;

while (i < 10) {
    // console.log(i);
    i++;

    if (i == 5) {
        break;
    }
}

for (var i = 0; i < 20; i++) {
    // console.log(i);
    if (i == 10) {
        break;
    }
}

var num = [70, 25, 26, 80, 47, 100, 90, 45];

for (var i = 0; i < num.length; i++) {
    var number = num[i];
    // console.log(number);
    if (number > 90) {
        break;
    }
}


var numbers = [50, 60, 65, 70, 45, 80, 85, 90, 95, 100, 105, 125];

var k = 0;

while (numbers.length > k) {
    var number = numbers[k];
    // console.log(number);
    k++;
    if (number > 90) {
        break;
    }
}


// continue


var m = 0;
while (m < 10) {

    m++;
    if (m == 5) {
        continue;
    }
    // console.log(m);
}


var arr = [30, 32, 50, 40, 60, 70, 75, 30, 25, 10];

for (var p = 0; p < arr.length; p++) {
    var arrNumber = arr[p];

    if (arrNumber > 70) {
        continue;
    }
    // console.log(arrNumber);
}



var array = [10, 15, 20, 25, 30, 35, 40, 45, 5, 7, 9];
var a = 0;

while (a < array.length) {
    var arrayNum = array[a];
    a++;
    if (arrayNum > 40) {
        continue;
    }
    console.log(arrayNum);
}


if (array.indexOf(2) == -1) {
    console.log('it is not exits')
}

if (array.indexOf(10) != -1) {
    console.log('it is exits')
}

if (array[12] == null) {
    console.log('it is not exit')
} else {
    console.log('message')
}

if (array[3] != null) {
    console.log(array[3])
} else {
    console.log('not found')
}

var nums = [4, 5, 7, 6, 8, 2, 4, 1, 15];
console.log(nums.indexOf(6));

function getReminder(number1, number2) {
    var total = number1 % number2;
    return total;
}

var reminder = getReminder(12, 2)
console.log(reminder)

function addNumber(num1, num2) {
    return "Result is " + num1 + num2
}

var result = addNumber(5, 4)

console.log(result);
console.log(typeof result)