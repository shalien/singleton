import Singleton from '../src/singleton';


export default class MyClass extends Singleton {

    constructor () {
        super();
        this.internal = 'internal';
    }

}

const myClass = MyClass.getInstance();
console.log(myClass);
