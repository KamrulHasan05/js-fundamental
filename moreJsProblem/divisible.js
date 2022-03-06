function divisibleNumber(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FOOBAR");
        } else if (i % 5 == 0) {
            console.log("bar")
        } else if (i % 3 == 0) {
            console.log('Foo')
        } else {
            console.log(i)
        }
    }
}

divisibleNumber(50)