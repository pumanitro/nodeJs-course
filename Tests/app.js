
var greet = require('./hello');
greet();

var greet2 = require('./hello2').greet;
greet2();

var greet3 = require('./hello3');
greet3.greet();
greet3.greeting = 'New greetings !';

var greet3B = require('./hello3');
greet3B.greet();

var Greet4 = require('./hello4');
var grtr = new Greet4();
grtr.greet();
grtr.greeting = "Brand new greets !";

var Greet4B = require('./hello4');
var grtrB = new Greet4B();
grtr.greet();
grtr.greeting = "The newest greets :D";

var grtrC = new Greet4();
grtrC.greet();