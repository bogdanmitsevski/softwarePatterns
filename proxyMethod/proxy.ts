class AccountAccess {
  open() {
    console.log('Access to Account bohdan@mitsevski.com is open');
  }

  restricted() {
    console.log('Access to Account bohdan@mitsevski.com is restricted');
  }
}

class CheckLoginData {
  protected account:any;

  constructor(account:any) {
    this.account = account;
  }

  open(password:string) {
    if (this.authenticate(password)) {
      return this.account.open();
    }

    return this.account.restricted();
  }

  authenticate(password:string) {
    return password === '123bohdan';
  }

  restricted() {
    this.account.restricted();
  }
}

const account = new CheckLoginData(new AccountAccess());
const loginData = account.open('123bohdan'); // is Open
// const loginDataNew = account.open('12111'); // is Closed
