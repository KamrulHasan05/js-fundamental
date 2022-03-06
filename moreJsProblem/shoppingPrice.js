const shopping = [

    {
        name: 'Shirt',
        price: 500
    },
    {
        name: 'Mobile',
        price: 5500
    },
    {
        name: 'laptop',
        price: 50000
    },
    {
        name: 'Pant',
        price: 2000
    }

];

let totalAmount = 0;

for (const product of shopping) {
    totalAmount = totalAmount + product.price;
}
console.log(totalAmount)


const cart = [

    {
        name: 'Shirt',
        price: 500,
        quantity: 2
    },
    {
        name: 'Mobile',
        price: 5500,
        quantity: 1
    },
    {
        name: 'laptop',
        price: 50000,
        quantity: 1
    },
    {
        name: 'Pant',
        price: 2000,
        quantity: 1
    },
    {
        name: 'Watch',
        price: 2000,
        quantity: 3
    }

];

function totalCart(product) {
    let totalPrice = 0;
    for (const products of product) {
        totalPrice = totalPrice + (products.price * products.quantity);
    }
    return totalPrice;
}

console.log(totalCart(cart))