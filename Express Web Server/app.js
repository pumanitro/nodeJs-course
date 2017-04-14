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

app.listen(port);