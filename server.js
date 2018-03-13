const express= require('express');
const hbs= require('hbs');


var app= express();
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear',function(){
    return new Date().getFullYear();
});

app.get('/',function(req,res){
    
    res.render('home.hbs',{
        name: 'rohan',
        likes: [
            'biking',
            'cycling'
        ]
    });
});

app.get('/about',function(req,res){
    res.render('about.hbs',{
        name: 'rohan'
    });
});

app.get('/bad',function(req,res){
    res.send({
        errorMessage:'unable to request'
    });
});
app.listen(3000);