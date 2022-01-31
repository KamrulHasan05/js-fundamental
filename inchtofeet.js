// if we need to call a task multiple times, we can call a function
function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

var myInch = 144;
var feet = inchToFeet(myInch);
console.log(feet);

var dadiInch = 156;
var feet = inchToFeet(dadiInch);
console.log(feet)

var dadaInch = 168;
var feet = inchToFeet(dadaInch);
console.log(feet)


// meter to km
function meterToKm(meter) {
    var km = meter / 1000;
    return km;
}

var meter = 5000;
var km = meterToKm(meter);
console.log('This is', km, 'km')

// km to meter
function kmToMeter(km) {
    var meter = km * 1000
    return meter;
}

var km = 5;
var meter = kmToMeter(km);
console.log('This is', meter, 'meter')

// km to mile
function kmTomile(km) {
    var mile = km / 1.60934
    return mile;
}

var km = 10000;
var mile = kmTomile(km)
console.log('this is', mile, 'mile')

// mile to km

function mileTokm(mile) {
    var km = mile / 0.621371;
    return km;
}

var mile = 6213.727366498068;
var km = mileTokm(mile)
console.log('this is', km, 'km')