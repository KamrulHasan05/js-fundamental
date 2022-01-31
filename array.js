var friendsAge = [20, 21, 24];

var naika = ['Popy', 'Prova', 'Shapla'];

var vowels = ['a', 'e', 'i', 'o', 'u'];

console.log(friendsAge);

// Array Length
var vowelsCount = vowels.length;

console.log(vowelsCount);

// Array Index

var bookChapter = ['hablu', 'dablu', 'kablu', 'chablu'];

var chabluIndex = bookChapter.indexOf('chablu');

console.log(chabluIndex);

console.log(bookChapter.indexOf('hablu'));

console.log(naika[1]);
console.log(naika);
naika[1] = "Sunny Leon";

console.log(naika);



var bookList = ['Gaints', 'a storye tale', 'mother', 'love letter'];

for (var i = 0; i < bookList.length; i++) {
    var bookLoop = bookList[i];
    console.log(bookLoop);
}

var bookList = ['Gaints', 'a storye tale', 'mother', 'love letter'];
var i = 0;
while (i < bookList.length) {
    console.log(bookList[i]);
    i++;
}