/**
 * Created by puman on 09.04.2017.
 */

var Emitter = require('events');
var emtr = new Emitter();

emtr.on('greet', function(){
    console.log('Just next hello :)')
});

emtr.on('greet', function(){
   console.log('After welcome !');
});

emtr.emit('greet');