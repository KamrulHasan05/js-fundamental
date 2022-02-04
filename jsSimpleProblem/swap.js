// Swap variable = value changing
let first = 5;
let second = 7;
console.log(first, second)
let temp = first;
first = second
second = temp
console.log(first, second)


let name1 = "Rabeya";
let name2 = "Sathy";
console.log(name1, name2)

let tempName = name1
name1 = name2
name2 = tempName
console.log(name1, name2)


// Distructing like swap
let player1 = "rony";
let player2 = "kamrul";
[player1, player2] = [player2, player1];
console.log(player1, player2);

let player3 = "hasan";
let player4 = "sathy";
[player3, player4] = [player4.toUpperCase(), player3.toUpperCase()];

console.log(player3, player4);