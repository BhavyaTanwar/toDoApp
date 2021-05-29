//require the library
const mongoose = require('mongoose');
//connection to db
mongoose.connect('mongodb://localhost/todo_db');
//acquire the connection (to check if its successful)
const db = mongoose.connection;
// error
db.on('error',console.error.bind(console,'Error connecting to db'));
//up and running then print message
db.once('open',function(){
    console.log('Successfully connected to database');
});