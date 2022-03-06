// Problem-1
function anaToVori(ana) {
    if (typeof ana == "number" && ana >= 1) {
        vori = ana / 16;
        return vori;
    } else {
        return "please insert positive number more than 0 & avoid text to get result";
    }
}
// console.log(anaToVori(-20));

// Problem-2
function pandaCost(singara, somuca, jilapi) {
    let perSingaraPrice = 7;
    let perSomucaPrice = 10;
    let perJilapiPrice = 15;
    if (
        typeof singara == "number" &&
        typeof somuca == "number" &&
        typeof jilapi == "number" &&
        singara >= 0 &&
        somuca >= 0 &&
        jilapi >= 0
    ) {
        let totalSingaraPrice = singara * perSingaraPrice;
        let totalSomucaPrice = somuca * perSomucaPrice;
        let totalJilapiPrice = jilapi * perJilapiPrice;

        let totalPrice = totalSingaraPrice + totalSomucaPrice + totalJilapiPrice;

        return totalPrice;
    } else {
        return "please insert positive number more than 0 & avoid text to get result";
    }
}
// console.log(pandaCost(0, 5, 3))

// Problem-3
function picnicBudget(person) {
    let first100PerPersonCost = 5000;
    let second100PerPersonCost = 4000;
    let restPerPersonCost = 3000;
    if (typeof person == "number" && person >= 0) {
        if (person <= 100) {
            let totalBudget = person * first100PerPersonCost;
            return totalBudget;
        } else if (person <= 200) {
            let first100PersonCost = first100PerPersonCost * 100;
            let second100Person = person - 100;
            let second100PersonCost = second100Person * second100PerPersonCost;
            let totalBudget = first100PersonCost + second100PersonCost;
            return totalBudget;
        } else {
            let first100PersonCost = first100PerPersonCost * 100;
            let second100PersonCost = second100PerPersonCost * 100;
            let restPerson = person - 200;
            let restPersonCost = restPerson * restPerPersonCost;
            let totalBudget =
                first100PersonCost + second100PersonCost + restPersonCost;
            return totalBudget;
        }
    } else {
        return "please insert positive number more than 0 & avoid text to get result";
    }
}
// console.log(picnicBudget(250));

// Problem-4
function oddFriend(names) {
    let oddName;
    if (names.length != 0) {
        for (const name of names) {
            if (typeof name == "string") {
                if (name.length % 2 != 0) {
                    oddName = name;
                    break;
                } else {
                    oddName = "Please, Enter at least one odd name";
                }
            } else {
                oddName = "Enter String";
            }
        }
    } else {
        oddName = "Please Enter an array of name";
    }
    return oddName;
}

// const friendNames = [1, 2, 3];
// console.log(oddFriend(friendNames));