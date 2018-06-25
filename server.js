const express= require('express');
const hbs= require('hbs');

 const port=process.env.PORT ||3000;
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
app.listen(port);

//var sentimentAnalysis = require('sentiment-analysis');
// 
//var a=sentimentAnalysis('I am joyful and joyfully');
//console.log(a);

//var express= require('express');
// 
//var app =express();
//
//app.get('/',(req,res)=>{
//    //res.send('Hello express');
//    res.send({
//        name: 'Andrew',
//        list: ['apple','coco']
//    });
//});
//app.listen(3000,()=>{
//    console.log('server is up on port 3000');
//});
