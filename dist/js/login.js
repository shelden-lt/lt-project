$(function(){
    $("#btn").click(function(){
        $.get("http://jx.xuzhixiang.top/ap/api/login.php",{
            username : $("#name").val(),
            password : $("#pw").val()
        },data=>{
            if(data.code === 1){
                location.href="../index.html";
            }else{
                alert("用户名或密码错误 请重试！");
            }
        })
    })
})