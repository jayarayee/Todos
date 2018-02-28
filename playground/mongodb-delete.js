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

    // db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err, result) =>{
    //     console.log('Unable to fatch todos', err);   
    // });
    db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=>{
        console.log(result);
    });


    // clint.close();
});
