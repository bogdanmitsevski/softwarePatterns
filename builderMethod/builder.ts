// паттерн Builder використовуються у випадку, коли ми маємо основний об'єкт, наприклад, телефон, який має певний набір характеристик.
// Але різним людям потрібні різні телефони і щоб не створбвати підкласи з різними моделями телефонів - ми створимо один основний клас,
// який містить усі властивості і створимо окремі класи-будівельники, які використовуватимуть лише певний набір властивостей під конкретний
// телефон, який потрібно виготовити

class Phone {
    public name:any;
    public price:any;
    public color:any;
    public aluminiumBody: any;
    public goldBody: any;
    public titanBody: any;
    public singleCamera: any;
    public quatroCamera: any;
    public fastCharge: any;
    public caseInBox: any;
    public headPhoensOutPut: any;
    public memoryCard: any;
    constructor () {
        this.name = false;
        this.price = false;
        this.color = false;
        this.aluminiumBody = false;
        this.goldBody = false;
        this.titanBody = false;
        this.singleCamera = false;
        this.quatroCamera = false;
        this.fastCharge = false;
        this.caseInBox = false;
        this.headPhoensOutPut = false;
        this.memoryCard = false;

    }
    
}

    class titanPhoneBuilder {
        public titanPhone: any;
        constructor () {
            this.titanPhone = new Phone();
        }

        addName (name:any) {
            this.titanPhone.name = name;
            return this;
        }

        addColor (color:any) {
            this.titanPhone.color = color;
            return this;
        }

        addTitanBody (titanBody:any) {
            this.titanPhone.titanBody = titanBody;
            return this;
        }

        addQuatroCamera (quatroCamera:any) {
            this.titanPhone.quatroCamera = quatroCamera;
            return this;
        }


        addFastCharge (fastCharge: any) {
            this.titanPhone.fastCharge = fastCharge;
            return this;
        }

        build () {
            return this.titanPhone;
        }
    };

    class goldPhoneBuilder {
        public goldPhone: any;
        constructor () {
            this.goldPhone = new Phone();
        }

        addName (name:any) {
            this.goldPhone.name = name;
            return this;
        }

        addColor (color:any) {
            this.goldPhone.color = color;
            return this;
        }

        addGoldBody (goldBody:any) {
            this.goldPhone.goldBody = goldBody;
            return this;
        }

        addQuatroCamera (quatroCamera:any) {
            this.goldPhone.quatroCamera = quatroCamera;
            return this;
        }


        addFastCharge (fastCharge: any) {
            this.goldPhone.fastCharge = fastCharge;
            return this;
        }

        build () {
            return this.goldPhone;
        }
    };

    class aluminiumPhoneBuilder {
        public aluminiumPhone: any;
        constructor () {
            this.aluminiumPhone = new Phone();
        }

        addName (name:any) {
            this.aluminiumPhone.name = name;
            return this;
        }

        addColor (color:any) {
            this.aluminiumPhone.color = color;
            return this;
        }

        addAluminiumBody (aluminiumBody:any) {
            this.aluminiumPhone.addAluminiumBody = aluminiumBody;
            return this;
        }

        addSingleCamera (singleCamera:any) {
            this.aluminiumPhone.singleCamera = singleCamera;
            return this;
        }

        addHeadPhonesOutput (headPhoensOutPut:any) {
            this.aluminiumPhone.headPhoensOutPut = headPhoensOutPut;
            return this;
        }

        addMemoryCard (memoryCard: any) {
            this.aluminiumPhone.memoryCard = memoryCard;
            return this;
        }

        build () {
            return this.aluminiumPhone;
        }
    };

    const cheapPhone = new aluminiumPhoneBuilder().addName('iPhone XR')
                                                  .addAluminiumBody(true)
                                                  .addColor('Black')
                                                  .addHeadPhonesOutput(true)
                                                  .addMemoryCard(true)
                                                  .addSingleCamera(true)
                                                  .build()

    const expensivePhone1 = new titanPhoneBuilder().addName('iPhone 14 Pro Max')
                                                  .addTitanBody(true)
                                                  .addColor('White')
                                                  .addQuatroCamera(true)
                                                  .build()

    const expensivePhone2 = new goldPhoneBuilder().addName('iPhone 14 Pro Max')
                                                  .addGoldBody(true)
                                                  .addColor('Gold')
                                                  .addQuatroCamera(true)
                                                  .build()

    console.log(cheapPhone, expensivePhone1, expensivePhone2);