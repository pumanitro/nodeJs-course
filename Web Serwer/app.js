/**
 * Created by puman on 13.04.2017.
 */

var http = require('http');
var fs = require('fs');

http.createServer(function (req,res) {

    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream('index.html').pipe(res);
    //var html = fs.readFileSync('index.html');
    //res.end(html);

}).listen(1337,'localhost');

