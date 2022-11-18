class Memento {
    public value:any;
    constructor(value:any){
        this.value = value;
    }
};

const creator = {
save: (val: any) => new Memento(val),
restore: (memento: { value: any; }) => memento.value
}


class CareTaker {
    public values:any;
    constructor() {
        this.values = [];
    }

    addMemento (memento:any) {
        this.values.push(memento);
    }

    getMemento (index:any) {
        return this.values[index];
    }
};

const careTaker = new CareTaker();
careTaker.addMemento(creator.save('hello1'));
careTaker.addMemento(creator.save('hello2'));
careTaker.addMemento(creator.save('hello3'));

console.log(creator.restore(careTaker.getMemento(1)));
