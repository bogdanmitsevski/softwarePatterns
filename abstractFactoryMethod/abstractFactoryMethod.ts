type Kind = 'C Class' | 'E Class' | 'S Class';
function DaimlerProducer (kind:Kind) {
    if(kind == 'C Class') {
        return middleClassProduce();
    }

    if(kind == 'E Class') {
        return businessClassProduce();
    }

    if(kind == 'S Class') {
        return sonderClassProduce();
    }
}

    function middleClassProduce() {
        return new MercedesProducerC();
    };

    function businessClassProduce() {
        return new MercedesProducerE();
    }

    function sonderClassProduce() {
        return new MercedesProducerS();
    }

    class MercedesCclass{
        public model:any;
        public body:any;
        public year:any;

        constructor(model:any, body:any, year:any) {
            this.model = model;
            this.body = body;
            this.year = year;
        }
    };

    class MercedesEclass{
        public model:any;
        public body:any;
        public year:any;

        constructor(model:any, body:any, year:any) {
            this.model = model;
            this.body = body;
            this.year = year;
        }
    };

    class MercedesSclass{
        public model:any;
        public body:any;
        public year:any;

        constructor(model:any, body:any, year:any) {
            this.model = model;
            this.body = body;
            this.year = year;
        }
    };

    class MercedesProducerC {
        create() {
                return new MercedesCclass('C Class', '$30000', '2020');
            }
        };

    class MercedesProducerE {
        create() {
                return new MercedesEclass('E Class', '$60000', '2020');
        }
    };

    class MercedesProducerS {
        create() {
                return new MercedesSclass('S Class', '$100000', '2020');
            }
    };

    const produce = DaimlerProducer('E Class');

    console.log(produce);
    const car = new produce;
    //console.log(car.create());