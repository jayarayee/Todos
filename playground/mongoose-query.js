const {mongooser} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id ='5a98d509bb698696f4d0b073';

Todo.find({
    _id:id
}).then((todos) =>{
    console.log('Todos', todos);
});
