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
        name: 'Htc',
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
    }
];


let highCamera = phones[0];

for (const phone of phones) {
    if (phone.camera > highCamera.camera) {
        highCamera = phone;
    }
}

console.log(highCamera)



const laptops = [{
        brand: 'Asus',
        hdd: 1,
        ssd: 256,
        gc: 4,
        price: 50000
    },
    {
        brand: 'Acer',
        hdd: 512,
        ssd: 120,
        gc: 2,
        price: 40000
    },
    {
        brand: 'Toshiba',
        hdd: 1,
        ssd: 120,
        gc: 4,
        price: 35000
    },
    {
        brand: 'Hp',
        hdd: 512,
        ssd: 120,
        gc: 2,
        price: 20000
    }
];


function cheapestLaptop(device) {
    let cheapest = device[0];
    for (const laptop of laptops) {
        if (laptop.price < cheapest.price) {
            cheapest = laptop;
        }
    }
    return cheapest;
}

console.log(cheapestLaptop(laptops))