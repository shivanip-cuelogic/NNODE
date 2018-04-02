var express = require("express");
var app = express;
var router = express.Router();
var schema = require('./../../model/myschema');
var path = require("path");

router.get('/:id',function(req,res){
    // var myid=req.param.id;
    var myid = req.params.id;
    schema.remove({_id:myid},function(err,result){
        if(err)
        console.log("Could not remove");
        else
        {
            console.log("data removed",result);
            schema.find(function(err,resultdata){
                if(err)
                console.log("couldnt refresh");
                else
                res.render(path.resolve(__dirname+'./../../views/admin/viewDataOfallUser.ejs')
           ,{result:resultdata});
            });
            
        }
       
    });
// console.log("data needed is:",myid);

});

module.exports= router;