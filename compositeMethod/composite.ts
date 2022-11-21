class Equipment {
  protected name:any;

  protected price:any;

  setName(name:any) {
    this.name = name;
  }

  setPrice(price: any) {
    this.price = price || 0;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

class Body extends Equipment {
  constructor() {
    super();
    this.setName('Body');
    this.setPrice(1000);
  }
}

class Display extends Equipment {
  constructor() {
    super();
    this.setName('Display');
    this.setPrice(500);
  }
}

class ProgrammingFeatures extends Equipment {
  constructor() {
    super();
    this.setName('ProgrammingFeatures');
    this.setPrice(1500);
  }
}

class Composite extends Equipment {
  protected equipments:any;

  constructor() {
    super();
    this.equipments = [];
  }

  add(equipment:any) {
    this.equipments.push(equipment);
  }

  getPrice() {
    return this.equipments.map((equipment:
       { getPrice: () => any; }) => equipment.getPrice()).reduce((a: any, b: any)=>a + b);
  }
}

class Phone1 extends Composite {
  constructor() {
    super();
    this.setName('iPhone');
  }
}

const newPhone = new Phone1();
newPhone.add(new Body());
newPhone.add(new Display());
newPhone.add(new ProgrammingFeatures());

console.log(`${newPhone.getName()} and Price ${newPhone.getPrice()}`);
