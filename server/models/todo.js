var mongoose = require('mongoose');

var TodoApp = mongoose.model('Todo', {
    text: {
        type: String,
        require: true,
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
module.exports={TodoApp};
