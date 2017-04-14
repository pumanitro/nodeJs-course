/**
 * Created by puman on 13.04.2017.
 */

const express = require('express');
let app = express();
let bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
let urlencodedParser = bodyParser.urlencoded({ extended: false });
let jsonParser = bodyParser.json();

app.use('/assets', express.static('public'));

app.use('/', function(req,res,next){
   console.log('Request Url: '+req.url);
   next();
});

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('index');
});

app.get('/api',function (req,res) {
    res.json({
       name: 'Patryk',
       secondName: 'Janik',
        job: 'Master of CODE!'
    });
});

app.get('/person/:id', function(req,res){
    res.render('persons',
        {
            ID: req.params.id,
            Qstr: req.query.qstr
        })
});

app.post('/person', urlencodedParser, function(req,res){
    res.send('Thank you!');
    console.log(req.body.firstName);
    console.log(req.body.lastName);
});

app.post('/person-json', jsonParser, function(req,res){
    res.send('Thank you for the JSON data!');
    console.log(req.body.firstName);
    console.log(req.body.lastName);
});

app.listen(port);