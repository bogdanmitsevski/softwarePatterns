class ProduceLine {
  addBody() {
    console.log('Body was added');
  }

  addDisplay() {
    console.log('Display was added');
  }

  addCamera() {
    console.log('Camera was added');
  }

  addBattery() {
    console.log('Battery was added');
  }

  addPrograms() {
    console.log('Programs were added');
  }

  addBox() {
    console.log('Box was added');
  }

  updateBattery() {
    console.log('Battery was updated');
  }
}

class PhoneFacade {
  protected phone:any;

  constructor(phone:any) {
    this.phone = phone;
  }

  createPhone() {
    this.phone.addBody();
    this.phone.addDisplay();
    this.phone.addCamera();
    this.phone.addBattery();
    this.phone.addPrograms();
    this.phone.addBox();
  }

  changeElements() {
    this.phone.updateBattery();
  }
}

const producedPhone = new PhoneFacade(new ProduceLine());
console.log(producedPhone.createPhone());
console.log(producedPhone.changeElements());
