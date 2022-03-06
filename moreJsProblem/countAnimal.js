function countAnimal(miles) {
    let animalInFirst10Miles = 10;
    let animalInSecond10Miles = 50;
    let animalInRestMiles = 100;

    if (miles <= 10) {
        let totalAnimal = animalInFirst10Miles * miles;
        return totalAnimal;
    } else if (miles <= 20) {
        let first10Mile = animalInFirst10Miles * 10;
        let restMile = miles - 10;
        let second10mile = restMile * animalInSecond10Miles;
        let totalAnimal = first10Mile + second10mile;
        return totalAnimal;
    } else {
        let first10Mile = animalInFirst10Miles * 10;
        let second10mile = animalInSecond10Miles * 10;
        let restMile = miles - 20;
        let restAllMile = restMile * 100;
        let totalAnimal = first10Mile + second10mile + restAllMile;
        return totalAnimal;
    }
}

console.log(countAnimal(28))