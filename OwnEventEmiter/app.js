/**
 * Created by puman on 09.04.2017.
 */

var Emitter = require('events');
var emtr = new Emitter();

var eventConfig = require('./config').events;

emtr.on(eventConfig.GREET, function(){
    console.log('Just next hello :)')
});

emtr.on(eventConfig.GREET, function(){
   console.log('After welcome !');
});

emtr.emit(eventConfig.GREET);