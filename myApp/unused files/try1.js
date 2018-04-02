var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
 name : String ,
 username : String,
 Phone_No : Number
});

var user1 = new userSchema({
 name : 'shivam',
 username : 'shom',
 Phone_No : 9767953874
});

user1.save(function(err) {
 if(err) {
 console.log(err);
 } else {
 console.log("Data inserted successfully");
 }
})



mongoose.connect('mongodb://127.0.0.1:27017',function(err) {
 if (err) {
 console.log(err);
 } else {


 console.log("Database is connected");
 }
})