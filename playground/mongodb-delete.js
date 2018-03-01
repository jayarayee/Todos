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

   // deleteMany
    db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=>{
        console.log(result);
    });


    // clint.close();
});
