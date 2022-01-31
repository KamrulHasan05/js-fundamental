function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

var year = 36000;
var isLeapyear = leapYear(year);

console.log('is lear Year', isLeapyear)