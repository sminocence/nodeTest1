$(function(){
    $.ajax({
        url: "/usercontent/list",
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
                str += '<tr><td>'+ user +'</td><td>'+content+'</td>'+
                
                </tr>';
                $('.lists').append(str);
            }   
        }
    })
})