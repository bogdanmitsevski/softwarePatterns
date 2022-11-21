class PaymentSystem {
  protected balance:any;

  protected incomer:any;

  protected name:any;

  setNext(account:any) {
    this.incomer = account;
  }

  canPay(amount:any) {
    return this.balance >= amount;
  }

  pay(orderPrice:any) {
    if (this.canPay(orderPrice)) {
      console.log(`Paid ${orderPrice} using ${this.name}`);
    } else if (this.incomer) {
      console.log(`Cannot pay using ${this.name} method`);
      this.incomer.pay(orderPrice);
    } else {
      console.log('Not enough money');
    }
  }

  show() {
    console.log(this);
  }
}

class MasterCard extends PaymentSystem {
  protected balance:any;

  protected name:any;

  constructor(balance:any) {
    super();
    this.name = 'Master Card';
    this.balance = balance;
  }
}

class PayPal extends PaymentSystem {
  protected name:any;

  protected balance:any;

  constructor(balance:any) {
    super();
    this.name = 'PayPal';
    this.balance = balance;
  }
}

class Stripe extends PaymentSystem {
  protected name:any;

  protected balance:any;

  constructor(balance:any) {
    super();
    this.name = 'Stripe';
    this.balance = balance;
  }
}

const master = new MasterCard(200);
const paypal = new PayPal(300);
const stripe = new Stripe(1000);

master.setNext(paypal);
paypal.setNext(stripe);

console.log(master.pay(100));
console.log(master.show());
