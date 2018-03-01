var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// save new something 
var TodoApp = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed:{
        type: Boolean
    },
    completedAt:{
        type: Number
    }
});

// var newTodo = new TodoApp({
//     text: 'cook dinner'
// });

// newTodo.save().then((doc)=>{
//     console.log('Save todo', doc);
// }, (e) =>{
//     console.log('Unable to save the todo');
// });
var otherTodo = new TodoApp({
    text:'Feed the cat',
    completed: true,
    completedAt:123
});
otherTodo.save().then((doc)=>{
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) =>{
    console.log('Unable to save the todo');
});