// Rasta Par howa
var signal = ['green', 'yellow', 'red'];

if (signal[1] == 'red') {
    console.log('Rasta Par hbo na');
} else if (signal[0] == "yellow") {
    console.log('Rasta Par Hbo na');
} else {
    console.log('rasta par hbo');
}

console.log(signal.length);


// Students Grade

var marks = 47;


if (marks < 100 && marks > 79) {
    console.log('you got a+');
} else if (marks <= 79 && marks >= 70) {
    console.log('you got a');
} else if (marks <= 69 && marks >= 60) {
    console.log('you got a-');
} else if (marks <= 59 && marks >= 50) {
    console.log('you got B');
} else {
    console.log('you are fail');
}



var works = ['eat', 'play', 'prayer', 'dating', 'dancing'];

for (var i = 0; i < works.length; i++) {
    console.log(works[i]);
}


var age = [20, 30, 25, 32, 10, 6, 22];

for (var j = 0; j < age.length; j++) {
    var singleAge = age[j];
    console.log(singleAge);
}



var works = 0;
while (works <= 10) {
    console.log('Module will unlock in 8pm');
    works++;
}


for (var l = 0; l <= 10; l++) {
    console.log("module will unlock in 8pm");
}


var dim = null;

console.log(typeof dim);



var arr = [20, 30, 40, 50, 60, 70, 80];
// var i = 0;
// while (i < arr.length) {
//     var arrNum = arr[i];
//     console.log(arrNum);
// }

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


var name = ['karim', 'rahim', 'sarim', 'kadir'];

var j = 0;

while (j < name.length) {
    console.log(name[j]);
    j++;
}


for (var k = 20; k > 0; k--) {
    console.log(k);
}


var input = 'a';

console.log(input.toUpperCase());

var output = 'A';

console.log(output.toLowerCase());


console.log(input + ' is a vowel');

console.log(output, "also a vowel");



var num = 100;
var z = 0;

while (z < num) {
    console.log(z += 2);
}


var num2 = 100;

var a = 1;

while (a < 100) {
    console.log(a += 2);
}


for (var z = 1; z <= 100; z++) {
    if (z % 2 == 0) {
        console.log(z);
    }
}


for (var j = 1; j <= 100; j++) {
    if (j % 2 != 0) {
        console.log(j);
    }
}



var namta = 7;

var o = 1;

while (o <= 10) {
    console.log(namta, '*', o, '=', o * namta);
    o++;
}


var namta2 = 10;
for (var z = 1; z <= 10; z++) {
    console.log(namta2 + ' * ' + z + ' = ' + z * namta2);
}