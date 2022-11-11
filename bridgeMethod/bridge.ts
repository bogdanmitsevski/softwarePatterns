class Model {
    public color:any;
    constructor(color:any) {
        this.color = color;
    }
};

class Color {
    public type:any;
    constructor(type:any) {
        this.type = type;
    }

    get () {
        return this.type;
    }
};

class BlackColor extends Color {
    constructor () {
        super('black');
    }
}

class WhiteColor extends Color {
    constructor() {
        super('white');
    }
}

class Mercedes extends Model {
    constructor(color:any) {
        super(color);
    }

    paint() {
        return `Auto: Mercedes, Color: ${this.color.get()}`;
    }
}

class Bmw extends Model {
    constructor(color:any) {
        super(color);
    }

    paint() {
        return `Auto:BMW, Color: ${this.color.get()}`;
    }
}

const whiteMercedes = new Mercedes(new WhiteColor());
console.log(whiteMercedes.paint());