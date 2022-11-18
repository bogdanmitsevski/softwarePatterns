class AppleNews {
    public news:any;
    public actions:any;
    public text:any;
    constructor() {
        this.news = '';
        this.actions = [];
    };

    setNews(text:any) {
        this.text = text;
        this.notifyAll();
    };

    notifyAll() {
        return this.actions.forEach((subs: any) => {subs.inform(this)});
    };

    register(observer:any) {
        this.actions.push(observer);

    };

    unregister (observer:any) {
        this.actions = this.actions.filter((el: any) => !(el instanceof observer));
    };
};


class Bohdan {
    inform(message:any) {
        console.log(`Bohdan has been informed about: ${message.news}`);
    }
};

class Taras {
    inform(message:any) {
        console.log(`Bohdan has been informed about: ${message.news}`);
    }
};

const appleNews = new AppleNews();

appleNews.register(new Bohdan());
appleNews.register(new Taras());

appleNews.setNews('New iPhone has price $1000');

//const bohdan = new Bohdan();
