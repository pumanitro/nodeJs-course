/**
 * Created by puman on 13.04.2017.
 */

var http = require('http');
var fs = require('fs');

http.createServer(function (req,res) {

    res.writeHead(200, {'Content-Type' : 'application/json'});

    var obj = {
        firstName: 'Patryk',
        lastName: 'Janik',
        job: 'Master of WEB DEVELOPMENT :D'
    };

    res.end(JSON.stringify(obj));

    // Read file as Stream and put it into the end of response :
    //fs.createReadStream('index.html').pipe(res);

    //Synchronous read of the file :
    //var html = fs.readFileSync('index.html');
    //res.end(html);

}).listen(1337,'localhost');

