// তো মাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্ যালকুলেশন করে তাপমাত্ রা ফারেনহাইট এ কনভার্ ট করে সেটার আউটপুট রিটার্ ন করবে

function celTofar(number) {
    let toFar = (number * 9 / 5) + 32;
    return toFar;
}

var farenheight = celTofar(40);
console.log(farenheight);


// একইভাবে উল্ টা হিসাব করবে। যাতে তো মাকে ফারেনহাইট হিসেবে তাপমাত্ রা দিলে সেটাকে সেলসিয়াস এ কনভার্ ট করে আউটপুট দিবে।

function farToCel(number) {
    var toCel = (number - 32) * 5 / 9;
    return toCel;
}
var celcius = farToCel(40);
console.log(celcius)

// সুদের হিসাব করবে। জাস্ ট হিসাব কেমনে করতে হয়। সেই চিন্ তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্ তা করার দরকার নাই। জাস্ ট একটা ফর্ মুলা থাকলে সেটা কিভাবে কো ড এ লিখতে হয় সেই এঙ্ গেল থেকে করার চেষ্ টা করো।

// p = Capital
// n = year
// r = interest rate

function futureValue(p, n, r) {
    var realR = r / 100;
    var i = p * n * realR;
    return i + p;
}

var totalInetrest = futureValue(50000, 5, 60)
console.log(totalInetrest)

// ১.একটা কো ড লিখো। যেটা দিয়ে কো ন একটা array এর মধ্ যে সবচেয়ে ছো ট সংখ্ যা বের করে দিতে পারবে।

// ২.একটা কো ড লিখো যেটা দিয়ে তিনটা সংখ্ যার মধ্ যে সবচেয়ে ছো ট সংখ্ যা বের করে দিবে।

// ৩.একটা ফাংশন লিখো। সেই ফাংশনের মধ্ যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্ যে অনেকগুলা সংখ্ যা থাকবে। তো মার কাজ হবে ইনপুট নেয়া array এর মধ্ যে যতগুলা সংখ্ যা আছে। সেই সংখ্ যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ ন হিসেবে দিয়ে দিবে। একটু চিন্ তা করো। বুঝার চেষ্ টা করো। ট্ রাই করো। দেখো পারো কিনা।

// ৪.একটা ফাংশন লিখো। যেটা ইনপুট প্ যারামিটার হিসেবে একটা আয়তক্ ষেত্ রের দৈর্ ঘ্ য আর উচ্ চতাকে নিবে। তারপর সেই আয়তক্ ষেত্ র এর area(আয়তন) কে রেজাল্ ট হিসেবে রিটার্ ন করবে।

function reactangleArea(length, width) {
    if (length < width) {
        console.log("length wont be less than width")
    }

    let total = length * width;
    return total;
}

let length = 40;
let width = 60;

let reactangle = reactangleArea(40, 60);

console.log(reactangle);


// ৫.কো ন একটা array এর মধ্ যে অনেকগুলা সংখ্ যা আছে। সেই সংখ্ যাগুলো থেকে second largest সংখ্ যা বের করার একটা প্ রো গ্ রাম লিখো। দরকার হলে গুগলে সার্ চ দাও। তারপর সার্ চ রেজাল্ ট দেখে বুঝে বুঝে করার চেষ্ টা করো।





function wordCount(sentence) {
    let arr = sentence.split(' ')
    let words = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] !== '') {
            words.push(arr[i]);
        }
    }
    return words.length;
}
let paragraph = " Hello    I am javascript,   I need rest.     ";

// console.log(wordCount(paragraph))