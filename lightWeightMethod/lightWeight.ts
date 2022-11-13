class NewPhone {
    public model:any;
    constructor(model:string) {
        this.model = model;
    }
};

class PhoneFactory {
    protected models:any
    constructor() {
        this.models = {};
    }
    create(name:string) {
        let model = this.models[name];
        if(model) return model;
        this.models[name] = model;
        return this.models[name];
    };

    getModels () {
        console.table(this.models);
    }
};

const factory = new PhoneFactory();
const iPhone = factory.create('iPhone');
const Samsung = factory.create('Samsung');
const Samsung1 = factory.create('Samsung'); // не додає, бо такий елемент уже існує
console.log(factory.getModels());


