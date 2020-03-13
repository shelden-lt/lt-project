$(function(){
    var str = "";
    var num = 0;
    var sum = 0;
    $.get("http://jx.xuzhixiang.top/ap/api/cart-list.php",{
        id:33022
    },data=>{
        console.log(data);
        for( let i in data.data){
            str += 
            `
        <li data-id="${data.data[i].pid}" class="lis">
            <div class="pItem pCheckbox">
                <input name="cart_list"  type="checkbox" class="ck">
            </div>
            <div class="pItem cart_pimg">
                <img src="${data.data[i].pimg}"  width="62" height="62">    
            </div>
            <div class=" pItem cart_pname">
                <a href="#" title="${data.data[i].pdesc}">
                    ${data.data[i].pname}
                </a>
            </div>
            <div class="pItem spree_p">
            ${data.data[i].pprice}
            </div>
            <div class="pItem cartAmount">
                <a href="#" class="down">-</a>
                <input type="text" value="${data.data[i].pnum}" class="amount">
                <a href="#" class="up">+</a>
            </div>
            <div class="pItem pWeight">2.7kg</div>
            <div class="pItem pSubtotal">¥
                <span id="total_price">${data.data[i].pprice*data.data[i].pnum}</span>
            </div>
            <div class="pItem pInventory">现货</div>
            <div class="pItem pOperator">
                <a id="cartDel" class="follow" href="#">收藏</a>&nbsp;&nbsp;
                <a id="cartDel" class="remove"  href="#">删除</a>
            </div>
        </li>
            
            `;
        }
        $(".cartcontent").html(str);

        $(".remove").click(function(){
            $.get("http://jx.xuzhixiang.top/ap/api/cart-delete.php",{
                uid:localStorage.getItem("uid"),
                pid:$(this).parent().parent("li").attr("data-id")
            },data=>{
                location.reload();
                console.log(data);
            })
            $(this).parent().parent("li").empty();
        })
        //加减
        $(".down").click(function(){
            num = $(".amount").val();
            num--;
           $(".amount").val(num);
           $.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php",{
               uid:localStorage.getItem("uid"),
               pid:$(this).parent().parent("li").attr("data-id"),
               pnum: $(".amount").val()
           },data=>{
                location.reload();
               console.log(data);
           })
        })
        $(".up").click(function(){
            num = $(".amount").val();
            num++;
           $(".amount").val(num);
           $.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php",{
            uid:localStorage.getItem("uid"),
            pid:$(this).parent().parent("li").attr("data-id"),
            pnum: $(".amount").val()
            },data=>{
                location.reload();
                console.log(data);
            }) 
        })
        //自己输入数字
        $(".amount").change(function(){
            num = $(this).val();
            console.log(num);
            $.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php",{
            uid:localStorage.getItem("uid"),
            pid:$(this).parent().parent("li").attr("data-id"),
            pnum: num
            },data=>{
                location.reload();
                console.log(data);
            }) 
        })
        //全选
        $(".selectAll").click(function(){
            sum++;
            if(sum % 2 == 1){
                $(this).parent().parent().siblings(".cartcontent").children(".lis").children().children(".ck").prop("checked",true);
                sum = 1;
            }else{
                $(this).parent().parent().siblings(".cartcontent").children(".lis").children().children(".ck").prop("checked",false);
                sum = 0;
            }
        })
        
        var count = 0
        var length = $(".lis").length;
        $(".lis").children(".pCheckbox").children().click(function(){
            count++;
            console.log(count)
            if(count == length){
                $(this).parent().parent().parent().siblings(".cartThead").children(".tCheckbox").children().prop("checked",true)
            }else{
                $(this).parent().parent().parent().siblings(".cartThead").children(".tCheckbox").children().prop("checked",false)
            }
        })

        
    })
})