/**
 * Created by puman on 09.04.2017.
 */

const EventEmitter = require('events');
const util = require('util');

module.exports = class Greetr extends EventEmitter{
    constructor(){
        super();
        this.greeting = `Hello`;
    }
    greet(data) {
        console.log(`Before greet emiting : ${this.greeting} ${data}`);
        this.emit('greet',data);
    }
}