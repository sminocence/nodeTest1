var express = require('express');
var router = express.Router();
var user = require('../database/user');
var crypto = require('crypto');//用于加密的模块

// api接口
var registerUser = function(data,callback){
    //创建实例
    var userOne = new user(data);
    //向数据库中存入用户的注册信息(username,password)
    userOne.save(function(err,data){
    //也可以不用data这个参数，这个只是用于下面输出data这个对象
        if(err){
            console.log(err);
        }else{
            console.log('用户创建成功');
            console.log(data);
            if(callback) callback();
        }
    });
}


//加密函数
function hashPW(userName,pwd){
    var hash = crypto.createHash('md5');
    hash.update(userName + pwd);
    return hash.digest('hex');
}

//注册
router.post('/save',function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    console.log(username,password);

    var query = {
        username: username,
        password: password
    }

    //查询是否已经被注册过
    user.find({
        username: username
    },function(err,docs){
        if(err){
            console.log('find user error');
        }else{
            if(docs.length == 0){
                //注册用户
                registerUser(query,function(data){
                    var hash = hashPW(username,password);
                    res.cookie("account",{account:username,hash:hash},{maxAge:86400000});
                    // res.send({
                    //     status: 200,
                    //     message: 'register success'
                    // });
                    res.redirect('login');
                    console.log('redirectlogin');
                })
            }else{
                res.send({
                    status: 500,
                    message: 'user had'
                })
            }
        }
    })
})


module.exports = router;