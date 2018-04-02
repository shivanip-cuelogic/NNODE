var express= require("express");
var app= express;
var router = express.Router();
var schema= require("./../../model/myschema");
var path = require("path");
var ObjectId = require('mongodb').ObjectID;


router.get('/:id',function(req,res){
    var myid = req.params.id;
console.log("user is:",myid);
// res.send("hello");
schema.findById({_id:myid},function(err,result){
    // var id= ObjectId(result[0]._id );
    console.log("username ",result.username,"firstname ",result.firstname,"lastname ",
    result.lastname,"password ",result.password,"id ",myid);
    res.render(path.resolve(__dirname+'./../../views/user/profile.ejs')
    ,{header:"Edit profile",
    username:result.username,
    firstname:result.firstname,
    lastname:result.lastname,
    password:result.password,
    ObjectId:myid
       });
});
});

module.exports= router;