// Фабричний метод. Використовуємо тоді,
// коли потрібно створити багато однотипних об'єктів, які отримують
// однакові дані по типу, але різні за значенням
class Mercedes1 {
  model: any;

  price: any;

  year: any;

  constructor(model: string, price: string, year: string) {
    this.model = model;
    this.price = price;
    this.year = year;
  }
}

class DaimlerAG {
  create(type: string, year: string) {
    if (type === 'C200') {
      return new Mercedes1(type, '$1000', year);
    }
    if (type === 'E350') {
      return new Mercedes1(type, '$10000', year);
    }

    if (type === 'E500') {
      return new Mercedes1(type, '$15000', year);
    }
  }
}

const carFactory = new DaimlerAG();
const classC = carFactory.create('E500', '2015');
const classE = carFactory.create('E350', '2014');
console.log(classC, classE);
