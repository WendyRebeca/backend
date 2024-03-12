const express = require('express')

const app = express();
app.use(express.json())

app.get('/', function(req, res){
    res.send('home');
});

app.post('/', function(req, res){
    console.log(req.body)
    res.status(201).end();
})

app.put('/', function(req, res){
    res.status(200).end()
})

app.delete('/', function(req, res){
    res.status(204).end()
})

app.listen(5000, function(){
    console.log("API está ON!")
})

module.exports = app;