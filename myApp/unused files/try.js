// var express = require("express");

// var app = express();

// app.use('/welcome',function(req,res) {
//     console.log('In the middleware !!');
    
// });

// app.get('/welcome',function(req,res) {
//     console.log('In get method !!');
//     res.send("<h1>Welcome</h1>");
// });


// app.listen(8080,function(req,res) {
//     console.log("Server listening on port 3000");
// });

var express = require("express");

var app = express();

app.use('/welcome',function(req,res,next) {
    console.log('In the middleware !!');
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err,req,res,next){
    console.log(err);
    res.send(err);
    
})

app.get('/welcome',function(req,res) {
    console.log('In get method !!');
    res.send("<h1>Welcome</h1>");
});


app.listen(8080,function(req,res) {
    console.log("Server listening on port 3000");
});