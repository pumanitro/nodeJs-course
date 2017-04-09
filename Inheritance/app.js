/**
 * Created by puman on 09.04.2017.
 */

const Greetr = require('./greetr');

let greeter = new Greetr();

greeter.on('greet',function(data){
   console.log(`Im greet function. Thats my data : ${data}`);
});

greeter.greet('Tony');



