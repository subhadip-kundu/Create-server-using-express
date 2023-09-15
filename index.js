const express = require('express');

const app = express();

const PORT = 1234;

const HOSTNAME = 'localhost';

app.get('/',(req,res)=>{
    res.send('Hello, Subhadip');
})

app.get('/about',(req,res)=>{
    res.send('Hello, Subhadip ! You re in about section');
})

app.get('/contact',(req,res)=>{
    res.send('Hello, Subhadip! You are in contact section');
})

app.get('/feedback',(req,res)=>{
    res.send('Hello, Subhadip! You are in feedback section');
})

app.get('/blog',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.listen(PORT,()=>{
    console.log(`Server running at ${HOSTNAME}: ${PORT}`);
});

