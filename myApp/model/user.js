var mongoose = require('mongoose');
// var express = require("express");
var schema= mongoose.Schema;

var User= new schema({
     username:String,
    password: String
});

module.exports=mongoose.model('User',User);