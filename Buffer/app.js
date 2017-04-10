/**
 * Created by puman on 10.04.2017.
 */

const buf = Buffer.from('Hello world','utf-8');

console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[1]);

buf.write('xD');
console.log(buf.toString());
