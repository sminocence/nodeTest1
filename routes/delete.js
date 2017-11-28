var express = require('express');
var router = express.Router();
var comment = require('../database/comment');


router.get('/',function(req,res){

    //从数据库中查询所有的评论条数
    var user = req.body.user;
    console.log(user);
    comment.remove({user:req.body.user},function(error,result){
        if(error){
            console.log('error');
        }else{
            console.log(result.result);
            console.log('删除成功');
            res.redirect('commentlists');
            // var dataJson = res.json(docs);
            // console.log(dataJson);
        }
    });
})


module.exports = router;