class Mercedes2 {
    public model: any;
    public price: any;
    public year: any;

    constructor(model: any, price: any, year: any) {
        this.model = model;
        this.price = price;
        this.year = year;
    }

}

class MercedesFactory1 {
    create(type: any, year: any) {
        switch (type) {
            case 'C200':
                return new Mercedes2('C200', '$1000', year);

            case 'E350':
                return new Mercedes2('E350', '$1000', year);

            case 'E500':
                return new Mercedes2('E500', '$1000', year);
        }
    }
}

const newCar1 = new MercedesFactory1;
const newMercedes1 = newCar1.create('C200', '1985');
console.log(newMercedes1);