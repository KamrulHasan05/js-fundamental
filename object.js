var student = {
    id: 1,
    name: 'Kamrul Hasan',
    class: 6,
    height: 5.7,
    phone: 01620654677
};

var book = {
    title: 'start with why',
    author: 'Simon Sinek',
    price: 100,
    pages: 246,
    publisher: 'Panguine'
};

var hall = {
    name: 'Salimullah Muslim',
    founder: 'Salimullah Saheb',
    status: 'boys hall'
};



// console.log(hall);
console.log(hall.name);
hall.name = 'Salumillah Muslim Hall, DU';
var doner = hall.founder;
console.log(hall)
console.log(doner)

// different way to set object property
var computer = {
    model: 'Asus',
    price: 35000,
    processor: 'i5',
    storage: '256gb'
};

console.log(computer);

computer.price = 30000;

console.log(computer)

computer['price'] = 25000;

console.log(computer)

var priceProperty = 'price';
computer[priceProperty] = 20000;
console.log(computer);
console.log(computer.price);


var desktop = {
    price: 1000000,
    ram: '4gb',
    hardDisk: '256gb'
};

console.log(desktop)

desktop.hardDisk = '512gb';
console.log(desktop)

desktop['hardDisk'] = '1TB';
console.log(desktop)

var hardDiskProperty = 'hardDisk';
desktop[hardDiskProperty] = '2TB';

console.log(desktop)

console.log(desktop.price);
console.log(desktop.hardDisk);
console.log(desktop.ram);

var budget = desktop.price;

console.log(budget);