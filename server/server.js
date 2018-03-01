var express = require('express');
var bodyParser = require("body-parser");


var {mongoose} = require('./db/mongoose');
var {TodoApp} = require('./models/todo');
var {User} = require('./models/users');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res)=>{
    var todos = new TodoApp({
        text: req.body.text
    });
    todos.save().then((doc) =>{
        res.send(doc);
    },(e) =>{
        res.status(400).send(e);
    });
});

// GET/todos/


app.listen(3000, () =>{
console.log('Started on prot 3000');
});

module.exports={app}