const express=require('express');
const app = express();
app.get('',(req,res)=>{
    res.send('<h1>hello, this is form page<h1>')
});

app.get('/about',(req,res)=>{
    res.send(`
        <input type="text" placeholder="User name"/>
        <button>Click</button>
        `);
});

app.get('/help',(req,res)=>{
    res.send({
      name:'nikhil',
      email:'nikhil@test.com'
    });
    
});

app.get('/ok',(req,res)=>{
    res.send('hello, this is ok page')
});
 
app.listen(7000);