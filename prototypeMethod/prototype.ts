// паттерн Прототип використовується для створення об'єктів за схожими характеристиками і дає доступ до створеного прототипу з будь-якого
// місця програми

class Notebooks {
    public name: any;
    public price: any;
    public colour: any;
    public SSD: any;
    public HDD: any;
    public Ram: any;
    public Memory: any;
    constructor (name: string, price: string, colour: string, SSD: boolean, HDD: boolean, Ram: string, Memory: string) {
        this.name = name;
        this.price = price;
        this.colour = colour;
        this.SSD = SSD;
        this.HDD = HDD;
        this.Ram = Ram;
        this.Memory = Memory;

    }

    produce () {
        return new Notebooks(this.name, this.price, this.colour, this.SSD, this.HDD, this.Ram, this.Memory);
    }
}

    const prototypeCreate = new Notebooks('Macbook Pro', '$1000', "Space Gray", true, false, "32 GB", "512 GB");
    const prototypeCreateMacbookAir = new Notebooks('Macbook Air', '$900', 'Black', true, false, '8 GB', '256 GB');

    const macbookPro = prototypeCreate.produce();
    const macbookAir = prototypeCreateMacbookAir.produce();

    console.log(macbookPro);
    console.log(macbookAir);
    console.log(macbookAir.HDD);
    