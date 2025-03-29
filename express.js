const express=require('express');
const app = express();
app.get('',(req,res)=>{
    res.send('hello, this is form page')
});

app.get('/about',(req,res)=>{
    res.send('hello, this is about page')
});

app.get('/help',(req,res)=>{
    res.send('hello, this is help page')
});



app.get('/ok',(req,res)=>{
    res.send('hello, this is ok page')
});

app.listen(5000);