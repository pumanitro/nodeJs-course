/**
 * Created by puman on 13.04.2017.
 */

const express = require('express');
let app = express();

const port = process.env.PORT || 3000;

app.use('/assets', express.static('public'));

app.use('/', function(req,res,next){
   console.log('Request Url: '+req.url);
   next();
});

app.get('/',function(req,res){
    res.send('<html><head>' +
        '<link href="assets/style.css" type="text/css" rel="stylesheet"/></head><body><h1>Hello World!</h1></body></html>');
});

app.get('/api',function (req,res) {
    res.json({
       name: 'Patryk',
       secondName: 'Janik',
        job: 'Master of CODE!'
    });
});

app.get('/person/:id', function(req,res){
    res.send(`<html><head></head><body><h1>Person id : ${req.params.id}</h1></body></html>`)
});

app.listen(port);