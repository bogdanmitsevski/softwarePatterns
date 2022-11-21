class IteratorMethod {
  protected elements:any;

  protected keys:any;

  protected index:any;

  constructor(el:any) {
    this.elements = el;
    this.keys = Object.keys(el);
    this.index = 0;
  }

  next() {
    return this.elements[this.keys[this.index++]];
  }

  hasNext() {
    return this.index < this.keys.length;
  }
}

const phones = {
  iPhone: { model: '12 pro max', price: '1000' },
  Samsung: { model: 'S22', price: '1500' }
};

const collection = new IteratorMethod(phones);

while (collection.hasNext()) {
  console.log(collection.next());
}
