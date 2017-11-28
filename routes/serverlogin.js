var express = require('express');
var router = express.Router();
var user = require('../database/user');

router.post('/',function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    console.log(username,password);
    console.log('login sucess');
    user.find({username:username},function(err,docs){
        if(err){
            console.log(err);
        }else{
            console.log(docs);
            console.log(docs.length);
            if(username === docs[0].username && password === docs[0].password){
                console.log(docs[0].username,docs[0].password);
                res.redirect('commentlists');
                // console.log('content');

            }else{
                console.log('密码输入错误');
                res.redirect('serverlogin');
            }
        }
    })
})

module.exports = router;