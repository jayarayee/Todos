const MongoClint = require('mongodb').MongoClient;
// const { MongoClint, ObjectID } = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClint.connect('mongodb://localhost:27017/TodoApp', (err, clint) =>{
    if(err){
        return console.log('Unable to connect to Mongodb server');

    }
    console.log('Connected to MongoDB database');
    const db = clint.db('Todos');

    // db.collection('Todos').insertOne({
    //     text:'Somthing to do',
    //     completed: false
    // }, (err, result) =>{
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // db.collection('User').insertOne({
    //     name: 'Jaya',
    //     age: 25,
    //     location: 'Mountain View'
    // }, (err, result) =>{
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    clint.close();
});