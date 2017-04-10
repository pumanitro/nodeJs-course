/**
 * Created by puman on 10.04.2017.
 */

const fs = require('fs');

let readable = fs.createReadStream('text.txt',{
    highWaterMark : 10 * 1024,
    encoding : 'utf-8'
});

let writable = fs.createWriteStream('greetCopy.txt');

readable.on('data',function(chunk){
    console.log(chunk);
    writable.write(chunk);
});


