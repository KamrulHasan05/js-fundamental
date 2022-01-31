var chickenPrice = 180;
var myTaka = 1120;

if (chickenPrice < myTaka) {
  console.log("I will eat chicken");
} else {
  console.log("I will eat potato smashed with lantil soup");
}

var porotarDam = 10;
var rutirDam = 15;

if (porotarDam > rutirDam) {
  console.log("Ruti Khabo");
} else {
  console.log("Porota Khabo");
}

// Multiple condition

var gotJob = true;
var saveMoney = 200000;
var hasFlat = true;
var hasHouse = false;

// biye hbe
if (gotJob == true) {
  console.log("colo biye kori");
} else {
  console.log("biye hbe na");
}

// biye hbena
if (gotJob == true && saveMoney > 250000) {
  console.log("biye hbe");
} else {
  console.log("biye hbe na");
}

// biye hbena
if (gotJob == false && saveMoney < 250000) {
  console.log("biye hbe");
} else {
  console.log("biye hbe na");
}

// biye hbe
if (gotJob == true && saveMoney < 250000) {
  console.log("biye hbe");
} else {
  console.log("biye hbe na");
}

// biye hbe with or comparision
if ((gotJob == true && saveMoney > 250000) || hasFlat == true) {
  console.log("ami biye korbo");
} else {
  console.log("ami biye korbona");
}