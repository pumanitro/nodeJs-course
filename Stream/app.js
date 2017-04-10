/**
 * Created by puman on 10.04.2017.
 */

const fs = require('fs');
const zlib = require('zlib');

let readable = fs.createReadStream('text.txt',{
    encoding : 'utf-8'
});

let writable = fs.createWriteStream('greetCopy.txt');

//readable.pipe(writable);

/*
readable.on('data',function(chunk){
    console.log(chunk);
    writable.write(chunk);
});
*/

let compressed = fs.createWriteStream('greetCopy.txt.gz');

let gzip = zlib.createGzip();

readable.pipe(gzip).pipe(compressed);
