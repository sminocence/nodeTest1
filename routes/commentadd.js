var express = require('express');
var router = express.Router();
var comment = require('../database/comment');


router.get('/',function(req,res){
    res.render('commentadd');
})

// api接口
var addComment = function(data,callback){
    //创建实例
    var commentOne = new comment(data);
    //向数据库中存入用户的注册信息(username,password)
    commentOne.save(function(err,data){
    //也可以不用data这个参数，这个只是用于下面输出data这个对象
        if(err){
            console.log(err);
        }else{
            console.log('博客创建成功');
            console.log(data);
            if(callback) callback();
        }
    });
}

router.post('/',function(req,res){
    var user = req.body.user;
    var content = req.body.content;
    console.log(user,content);
    console.log('add sucess');
    var query = {
        user: user,
        content: content
    }

    //提交博客
    if(user != '' && content != ''){
        addComment(query);
        res.redirect('commentlists');
    }else{
        res.redirect('commentadd');
    }
    
});

module.exports = router;