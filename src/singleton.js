let instance = null;

export default class Singleton {

    constructor() {
        instance = this;
    }


    static getInstance() {
        if(instance === null) new Singleton();

        return instance;
    }
}
