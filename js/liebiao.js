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
    });
    var str = "";   
    var num = 1;
    var index = 0;
    $.get("http://jx.xuzhixiang.top/ap/api/productlist.php", {
        uid: localStorage.getItem("uid")
    }).then(data => {
        console.log(data)
        for(var i in data.data){
            str +=
            `
            <li data-id="${data.data[i].pid}" class="pid">
                <img src="${data.data[i].pimg}" alt="" class="pimg">
                <div class="pricebox">
                    <b> <i>￥</i>${data.data[i].pprice}</b><br>
                    <span> <a href="#">${data.data[i].pdesc}</a></span>
                </div>
                <div class="add">
                    <span class="minus">-</span>
                    <input type="text" class="num" value="${num}">
                    <span class="puls">+</span>
                    <span class="addcar">
                        <i class="icon iconfont icon-gouwugouwuchedinggou"></i>
                        加入购物车
                    </span>
                </div>
            </li>     
            `;              
        }
        $(".liebiao").html(str); 
        // //加减
        $(".puls").click(function(){
           num = $(this).siblings(".num").val();
           num++;
            $(this).siblings(".num").val(num);
        })
        $(".minus").click(function(){
            num = $(this).siblings(".num").val();
            if(num == 1){
                num = 1;
            }else{
                num--;
            }
             $(this).siblings(".num").val(num);
         })
        //向购物车添加数据   数量有问题
        $(".addcar").click(function(){
            $.get("http://jx.xuzhixiang.top/ap/api/add-product.php",{
                uid:localStorage.getItem("uid"),
                pid:$(this).parent().parent().attr("data-id"),
                pnum : $(this).siblings(".num").val()
            },data=>{
                console.log(data);
                location.href="../shopcar.html"
            })
           
        }) 

       //向详情页添加数据
        $(".pimg").click(function(){
            localStorage.setItem("id",($(this).parent().attr("data-id")))
            $.get("http://jx.xuzhixiang.top/ap/api/detail.php",{
                id:$(this).parent().attr("data-id"),
            },data=>{
                console.log(data)
            })
           location.href="../details.html"
        })
        
    });
  
    
})