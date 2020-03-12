$(function(){
    $(".logosafe .downlogo ul li").eq(0).mouseenter(function(){
        $(".slidenav").show();
    })
    $(".logosafe .downlogo ul li a").mouseleave(function(){
        $(".slidenav").hide();
        $(".slidenav").mouseenter(function(){
            $(this).show();
        })
        $(".slidenav").mouseleave(function(){
            $(this).hide();
        })
    })

//    $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
//         pname: "啤酒",
//         pprice: 76,
//         pimg: "../img/210x210_4.jpg",
//         pdesc: "啤酒",
//         uid: "33022"
//       }).then(data => {
//         console.log(data);
//       }); 

//  $.get("http://jx.xuzhixiang.top/ap/api/goods/goods-delete.php", {
//         uid: 33022,
//         pid: 197282,
//         token: localStorage.getItem("token")
//       }).then(data => {
//         console.log(data);
//       }); 


    $.get("http://jx.xuzhixiang.top/ap/api/productlist.php", {
        uid: localStorage.getItem("uid")
    }).then(data => {
        console.log(data);
        var str = "";
        var num = 1;
        for(let i = 0 ; i < data.data.length; i++){
            str +=
            `
            <li data-id = "${data.data[i].pid}">
                <img src="${data.data[i].pimg}" alt="" class="pimg">
                <div class="pricebox">
                    <b> <i>￥</i>${data.data[i].pprice}</b><br>
                    <span> <a href="#">${data.data[i].pdesc}</a></span>
                </div>
                <div class="add">
                    <span class="minus">-</span><input type="text" class="num" value="${num}"><span class="puls">+</span>
                    <span class="addcar">
                        <i class="icon iconfont icon-gouwugouwuchedinggou"></i>
                        加入购物车
                    </span>
                </div>
            </li>     
            `;
            
        }
        $(".liebiao").html(str);
        $(".pimg").click(function(){
            location.href="../shopcar.html"
            
        })
        $(".addcar").click(function(){
          location.href="../shopcar.html"
        })
      
        
    });
  
    
})