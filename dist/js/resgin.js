$(function(){
    $("#btn").click(function(){
        $.get("http://jx.xuzhixiang.top/ap/api/checkname.php?",
        {username:$("#name").val()},
        data=>{
            if(data.code === 1){
                $.get("http://jx.xuzhixiang.top/ap/api/reg.php",{
                    username : $("#name").val(),
                    password : $("#pw").val()
                },data=>{
                    if(data.code === 1){
                        location.href="../login.html";
                    }else{
                        alert("注册失败")
                    }
                })
            }else{
                alert("用户名已存在");
            }
        })
    })
})