class OrderStatus {
  public name:any;

  public nextStatus:any;

  constructor(name:any, nextStatus:any) {
    this.name = name;
    this.nextStatus = nextStatus;
  }

  next() {
    return new this.nextStatus();
  }
}

class WaitingForPayment extends OrderStatus {
  constructor() {
    super('waitingForPayment', Shipping);
  }
}

class Shipping extends OrderStatus {
  constructor() {
    super('shipping', Delivered);
  }
}

class Delivered extends OrderStatus {
  constructor() {
    super('delivered', Delivered);
  }
}

class Order {
  public state:any;

  constructor() {
    this.state = new WaitingForPayment();
  }

  nextState() {
    this.state = this.state.next();
  }

  cancelOrder() {
    if (this.state.name === 'waitingForPayment') {
      console.log('Order was cancelled');
    } else {
      console.log('Order cannot be cancelled');
    }
  }
}

const myOrder = new Order();
console.log(myOrder.state.name);
myOrder.nextState();
console.log(myOrder.state.name);
console.log(myOrder.cancelOrder());
