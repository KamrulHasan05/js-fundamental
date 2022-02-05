var var1 = "kamrul";
var var2 = 23;
var var3 = 'Player'

var i = 1;
while (i <= 100) {
    // console.log(i);
    i++;
}


var k = 50;

while (k <= 80) {
    if (k % 2 != 0) {
        // console.log(k)
    }
    k++;
}

function threeNumber(number1, number2, number3) {
    var total = number1 + number2 + number3;
    return total;
}

var totalNumber = threeNumber(20, 30, 50);
console.log(totalNumber)




// সুদের হিসাব করবে। জাস্ ট হিসাব কেমনে করতে হয়। সেই চিন্ তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্ তা করার দরকার নাই। জাস্ ট একটা ফর্ মুলা থাকলে সেটা কিভাবে কো ড এ লিখতে হয় সেই এঙ্ গেল থেকে করার চেষ্ টা করো।

function futureInterest(p, n, r) {
    let interestRate = r / 100;
    let total = (p * n * interestRate)
    return total + p;
}

let totalInterest = futureInterest(150000, 10, 60);
console.log(totalInterest);


function mularDam(quantity) {
    if (quantity <= 2) {
        var price = quantity * 30;
    } else {
        var price = quantity * 25;
    }
    return price;
}

let dam = mularDam(2);
console.log(dam)

function eBill(unit) {
    let bill;
    if (unit <= 100) {
        bill = unit * 5;
    } else if (unit > 200) {
        let firstBill = 100 * 5;
        let secondBill = 100 * 6;
        let remainBill = (unit - 200) * 7;
        bill = firstBill + secondBill + remainBill;
    } else if (unit > 100) {
        let thirdBill = 100 * 5;
        let forthBill = (unit - 100) * 6;
        bill = thirdBill + forthBill;
    }
    return bill;
}

var electricBill = eBill(250);
console.log(electricBill)