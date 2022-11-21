class Phone {
  accept(visitor:any) {
    visitor(this);
  }
}

class iPhone extends Phone {
  export: any;

  info() {
    return 'This is iPhone';
  }
}

class Samsung extends Phone {
  export: any;

  info() {
    return 'This is Samsung';
  }
}

class Huawei extends Phone {
  export: any;

  info() {
    return 'This is Huawei';
  }
}

function exportVisitor(phone:any) {
  if (phone instanceof iPhone) {
    phone.export = console.log(`Export Data: ${phone.info()}`);
  }

  if (phone instanceof Samsung) {
    phone.export = console.log(`Export Data: ${phone.info()}`);
  }

  if (phone instanceof Huawei) {
    phone.export = console.log(`Export Data: ${phone.info()}`);
  }
}

const iPhoneVisitor = new iPhone();
const SamsungVisitor = new Samsung();
const HuaweiVisitor = new Huawei();
console.log(iPhoneVisitor.accept(exportVisitor));
console.log(SamsungVisitor.accept(exportVisitor));
console.log(HuaweiVisitor.accept(exportVisitor));
