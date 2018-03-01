var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// save new something 
// var TodoApp = mongoose.model('Todo', {
//     text: {
//         type: String,
//         require: true,
//         minlength: 1
//     },
//     completed:{
//         type: Boolean,
//         default: false
//     },
//     completedAt:{
//         type: Number,
//         default: null
//     }
// });

// var newTodo = new TodoApp({
//     text: 'cook dinner'
// });

// newTodo.save().then((doc)=>{
//     console.log('Save todo', doc);
// }, (e) =>{
//     console.log('Unable to save the todo');
// });
// var otherTodo = new TodoApp({
//     text:'Edit this vedio',
    
// });
// otherTodo.save().then((doc)=>{
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) =>{
//     console.log('Unable to save the todo');
// });
var User = mongoose.model('User', {
    email: {
        type: String,
        require: true,
        trim: true,
        minlength: 1
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Number,
        default: null
    }
});
var user = new User({
    email:'rayeejaya@mail.com   ' 
});
user.save().then((doc)=>{
    console.log('User saved', doc)
}, (e)=>{
    console.log('Unable to save user', e)
});