const phones = [{
        name: 'Xiomi',
        storage: 8,
        camera: 12
    },
    {
        name: 'walton',
        storage: 8,
        camera: 16
    },
    {
        name: 'Blakberry',
        storage: 8,
        camera: 10
    },
    {
        name: 'Asus',
        storage: 8,
        camera: 8
    },
    {
        name: 'Oppo',
        storage: 8,
        camera: 25
    },
    {
        name: 'Apple',
        storage: 8,
        camera: 50
    },
    {
        name: 'Infinix',
        storage: 8,
        camera: 36
    },
    {
        name: 'Asus',
        brand: 'Asus',
        hdd: 1,
        ssd: 256,
        gc: 4,
        price: 50000
    }, {
        name: 'apple',
        brand: 'Apple',
        hdd: 512,
        ssd: 120,
        gc: 2,
        price: 40000
    }, {
        name: 'toshiba',
        brand: 'Toshiba',
        hdd: 1,
        ssd: 120,
        gc: 4,
        price: 35000
    }, {
        name: 'walton',
        brand: 'walton',
        hdd: 512,
        ssd: 120,
        gc: 2,
        price: 20000
    }
];

function search(products, productText) {
    let result = [];
    for (const product of products) {
        if (product.name.includes(productText)) {
            result.push(product);
        }

    }
    return result;
}
console.log(search(phones, 'Asus'));