/**
 * Created by puman on 10.04.2017.
 */

const fs = require('fs');

let greet = fs.readFileSync('greet.txt','utf-8');
console.log(greet);

let greet2 = fs.readFile('greet.txt','utf-8',(err,data)=>{
    if (err) throw err;
    console.log(data);
});

console.log('Done!');