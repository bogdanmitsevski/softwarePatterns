class Creator {
  // addProcessor: any;
  // addBody: any;
  // addDisplay: any;
  // addSoftware: any;
  create() {
    this.addProcessor();
    this.addBody();
    this.addDisplay();
    this.addSoftware();
  }

  addProcessor() {}

  addBody() {}

  addDisplay() {}

  addSoftware() {}
}

class iPhoneCreator extends Creator {
  addProcessor() {
    console.log('Add Bionic A11');
  }

  addBody() {
    console.log('Add Aluminium Body');
  }

  addDisplay() {
    console.log('Add Display with notch');
  }

  addSoftware() {
    console.log('Add IOS OS');
  }
}

class SamsungCreator extends Creator {
  addProcessor() {
    console.log('Add Qualcomm');
  }

  addBody() {
    console.log('Add Glass Body');
  }

  addDisplay() {
    console.log('Add Edge to Edge Display');
  }

  addSoftware() {
    console.log('Add Android OS');
  }
}

const produceIphone = new iPhoneCreator();
const produceSamsung = new SamsungCreator();
console.log(produceIphone.create());
console.log(produceSamsung.create());
