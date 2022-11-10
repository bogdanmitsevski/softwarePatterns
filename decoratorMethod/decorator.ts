class House {
    public price: any;
    public type: any;
    constructor () {
        this.price = 100000;
        this.type = 'Standard House';
    }

    getPrice () {
        return this.price;
    }

    getType () {
        return this.type;
    }
}

class BigHouse extends House {
    constructor () {
        super();
        this.price = 250000;
        this.type = 'Penthaus';
    }
}


class SwimmingPool extends BigHouse{
    public house: any;
    constructor(house:any) {
        super();
        this.house = house;
    }

    getPrice () {
        return this.house.getPrice() + 10000;
    }

    getType () {
        return `${this.house.getType()} with Swimming Pool`;
    }
}

let penthaus = new BigHouse();
penthaus = new SwimmingPool(penthaus);
console.log(penthaus.getPrice(), penthaus.getType())

