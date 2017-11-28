var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var swig = require('swig');
var user = require('./routes/user');
var login = require('./routes/login');
var serverlogin = require('./routes/serverlogin');
var commentadd = require('./routes/commentadd');
var commentlists = require('./routes/commentlists');
var serverUser = require('./routes/serverUser');
var deleteContent = require('./routes/delete');
var mongoose = require('mongoose');

//定义注册模板
app.engine('html',swig.renderFile);
app.set('view engine','html');

//设置模板目录
app.set('views','./views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//请求前端主页
app.get('/',function(req,res){
    res.render('index');
})

//请求前端注册页
app.get('/register',function(req,res){
    res.render('register');
})

//请求前端登录页
app.get('/login',function(req,res){
    res.render('login');
})
//请求后台登录页
app.get('/serverlogin',function(req,res){
    res.render('serverlogin');
})

//请求前端用户发表的博客
app.get('/usercontent',function(req,res){
    res.render('usercontent');
})

//请求后台主页
app.get('/server',function(req,res){
    res.render('serverIndex');
})

// 请求后台博客列表页
app.get('/commentlists',function(req,res){
    res.render('commentlists');
})

app.get('/api/login',function(req,res){
    res.render('login');
})

app.get('/server/serverlogin',function(req,res){
    res.render('serverlogin');
})
app.use('/api',user);
app.use('/server',serverUser);
app.use('/login',login);
app.use('/serverlogin',serverlogin);

app.use('/commentadd',commentadd);
app.use('/commentlists',commentlists);
app.use('/usercontent',commentlists);
app.use('/delete',deleteContent);
app.listen(3000);
console.log('listening on 3000');
// 连接数据库
mongoose.connect('mongodb://localhost:27017/myblog',function(err){
    if(err){
        console.log('数据库连接失败');
    }else{
        console.log('数据库连接成功');
    }
});
