var express = require('express');
var router = express.Router();
var comment = require('../database/comment');


router.get('/list',function(req,res){

    //从数据库中查询所有的评论条数
    comment.find({},function(err,docs){
        if(err){
            console.log('find user error');
        }else{
            // console.log(docs);
            res.json(docs);
            // console.log(dataJson);
        }
    });
})


module.exports = router;