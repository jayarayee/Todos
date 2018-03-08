const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt)=>{
    bcrypt.hash(password, salt, (err, hash)=>{
        console.log(hash);
        
    });
});

var hashPassword = '$2a$10$fVl97fSUebu0d5r/WmYVFe8hYYyMB2HKWJirPZKY.50DGbEqbWMTi';

bcrypt.compare(password, hashPassword, (err, res)=>{
    console.log(res);
});