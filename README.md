# singleton
A simple singleton implementation for ES6


It's just a simple singleton implementation for ES6

Extending the singleton class allow to use the static method 'getInstance()' on the object

```js
import Singleton from 'shalien-singleton';

export default class MyClass extends Singleton() {
    
    constructor() {
        super();
    }
    
}
```


