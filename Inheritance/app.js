/**
 * Created by puman on 09.04.2017.
 */

const EventEmitter = require('events');
const util = require('util');

class Greetr extends EventEmitter{
    constructor(){
        super();
        this.greeting = `Hello`;
    }
    greet(data) {
        console.log(`Before greet emiting : ${this.greeting} ${data}`);
        this.emit('greet',data);
    }
}

let greeter = new Greetr();

greeter.on('greet',function(data){
   console.log(`Im greet function. Thats my data : ${data}`);
});

greeter.greet('Tony');



