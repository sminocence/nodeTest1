$(function(){
    $('.but').click(function(){
        if($('#username').val() == '' || $('#password').val() == ''){
            alert('请输入数据');
        }else{
            var username = $('#username').val();
            var password = $('#password').val();
            console.log(username,password);
            var repass = $('#repass').val();
            if(password != repass){
                alert('两次输入的密码不一致');
            }else{
                $.ajax({
                    url: "/api/save",
                    type: "post",
                    contentType: "application/json",
                    data:JSON.stringify({
                        username: username,
                        password: password
                    })
                }); 
                $('#username').val("");
                $('#password').val("");
                $('#repass').val("");
                $('.register').append("<p>注册成功</p>");
            }
        } 
    })
})

