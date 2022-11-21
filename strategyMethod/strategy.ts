function newClient(amount:number) {
  return amount;
}

function currentClient(amount:number) {
  return amount * 0.95;
}

function oldClient(amount:number) {
  return amount * 0.90;
}

class PhoneCart {
  public discount:any;

  public amount:number;

  constructor(discount:any) {
    this.discount = discount;
    this.amount = 0;
  }

  checkout() {
    return this.discount(this.amount);
  }

  setAmount(amount:number) {
    this.amount = amount;
  }
}

const newCustomer = new PhoneCart(newClient);
const currentCustomer = new PhoneCart(currentClient);
const oldCustomer = new PhoneCart(oldClient);
newCustomer.setAmount(1000);
currentCustomer.setAmount(1000);
oldCustomer.setAmount(1000);
console.log(newCustomer.checkout());
console.log(currentCustomer.checkout());
console.log(oldCustomer.checkout());
