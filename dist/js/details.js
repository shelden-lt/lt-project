$(function(){

    var str = "";
    var num = 1;
    $.get("http://jx.xuzhixiang.top/ap/api/detail.php",{
            id:localStorage.getItem("id")
    },data=>{
        console.log(data.data);
       
            str = 
            `
            <div class="fada">
            <div class = "leftbox" id = "leftbox">
            <div id ="leftimg" >
             <img src="${data.data.pimg}" alt="" id = "leftbox_img">
             <p class= "glass" id = "glass"></p>
            </div>
             <ul>
                 <li><img src= "${data.data.pimg}" data-src = "${data.data.pimg}"></li>
                 <li><img src= "${data.data.pimg}" data-src = "${data.data.pimg}"></li>
                 <li><img src= "${data.data.pimg}" data-src = "${data.data.pimg}"></li>
                 <li><img src= "${data.data.pimg}" data-src = "${data.data.pimg}"></li>
             </ul>
         </div>
         <div class = "rightbox" id = "rightbox" style="background: url(${data.data.pimg}) no-repeat; background-size: 740px 700px;"
        ></div>
    </div>
    <div class="rightcon">
        <div class="ptitle">
            <p>自营</p>
            <h5>${data.data.pname}</h5>
        </div>
        <div class="pprice-c">
            <i>￥</i> 
            <b>${data.data.pprice}</b>
            <span>开通优选会员</span>
        </div>
       <div class="pcon">
            <div class="pAmount">
                <span><input type="text" id="number" class="text" value="${num}"></span>
                <span class="parent">
                    <a href="#" id="add-sell-num" class="p-add">+</a>
                    <a href="#" id="reduce-sell-num" class="p-reduce">-</a>
                </span>
            </div>
            <div class="pBtn" id="cart-add-btn-sf">加入购物车</div>
            <div class="quickBuy" id="quickBuy" >一键购买</div>
       </div>
    </div> 
            `;
       
        $(".detcon").html(str);


        $("#leftimg").mouseover(function(){
            $("#glass").css({"display":"block"});
            $("#rightbox").css({"display":"block"});
           })
           $("#leftimg").mouseleave(function(){
            $("#glass").css({"display":"none"});
            $("#rightbox").css({"display":"none"});
           })
           let r = 450 / 322;
           $("#leftimg").mousemove(function(e) {
              let evt = e || event;
                 let l = evt.pageX - $("#leftimg").offset().left - $("#glass").width()/2;
                 let t = evt.pageY - $("#leftimg").offset().top - $("#glass").height()/2;
                 let mw = $("#leftimg").width() - $("#glass").width();
                 let mh = $("#leftimg").height() - $("#glass").height();
                 l = l <= 0 ? 0 : l >= mw ? mw : l;
                 t = t <= 0 ? 0 : t >= mh ? mh : t;       
           $("#glass").css({"left":l, "top":t});
           $("#rightbox").css({"background-position-x":-l * r, "background-position-y":-t * r});
           })

        //加
        $(".p-add").click(function(){
            num++;
            $(this).parent().siblings().children().val(num);
        })
        //减
        $(".p-reduce").click(function(){
            num = $("#number").val();
            if(num == 1){
                num =1
            }else{
                num--;
            }
            $(this).parent().siblings().children().val(num);
        })
        //购物车
        $(".pBtn").click(function(){
            $.get("http://jx.xuzhixiang.top/ap/api/add-product.php",{
                uid:localStorage.getItem("uid"),
                pid:localStorage.getItem("id"),
                pnum : $("#number").val()
            },data=>{
                console.log(data)
                location.href="shopcar.html"
            })
        })
    }) 
})