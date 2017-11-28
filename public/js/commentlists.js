$(function(){
    $.ajax({
        url: "/commentlists/list",
        type: "get",
        data: {

        },
        dataType:'json',
        success: function(data,textStatus){
            console.log(data);
            for(var i=0;i<data.length;i++){
                var str = "";
                var user = data[i].user;
                var content = data[i].content;
                str += '<tr><td name="user">'+ user +'</td><td name="content">'+content+'</td>'+'<td><a href="/update" class="update">修改</a></td><td><a href="/delete" class="delete">删除</a></td></tr>';
                $('.lists').append(str);
            }   
        }
    })


})