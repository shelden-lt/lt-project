
$(function(){
    //top-img
    $(".top-img i").click(function(){
        $(".top-img").slideUp();
    })
    //地址栏
    $(".btndown").mouseenter(function(){
        $(this).css({"background-color":"#fff"});
        $(".btndown .caret").css({"border-top":"none","border-bottom":"4px solid #cccccc"});
        $(".add-nav").css({"display":"block"});
    })
    $(".add-nav").hover(function(){
        $(this).css("display","block");
        $(".btndown").css({"background-color":"#fff"});
        $(".btndown .caret").css({"border-top":"none","border-bottom":"4px solid #cccccc"});
    },function(){
        $(this).css("display","none");
        $(".btndown").css({"background-color":"#f7f7f7"});
        $(".btndown .caret").css({"border-bottom":"none","border-top":"4px solid #cccccc"});
    })
    $(".btndown").mouseleave(function(){
        $(".add-nav").css("display","none");
        $(".btndown").css({"background-color":"#f7f7f7"});
        $(".btndown .caret").css({"border-bottom":"none","border-top":"4px solid #cccccc"});
    })
    //优选
    
    $(".you").mouseenter(function(){
        $(".active").css({"border":"1px solid #969696","background-color":"#fff","border-bottom":"none"})
        $(".active span").css({"border-top":"none","border-bottom":"4px solid #cccccc"})
        $(".dropdownmenu").css("display","block");
    })
    $(".dropdownmenu").hover(function(){
        $(this).css("display","block");
        $(".active").css({"border":"1px solid #969696","background-color":"#fff","border-bottom":"none"})
        $(".active span").css({"border-top":"none","border-bottom":"4px solid #cccccc"})
    },function(){
        $(this).css("display","none");
        $(".active").css({"background-color":"#f7f7f7","border":"none"});
        $(".active span").css({"border-bottom":"none","border-top":"4px solid #cccccc"});
    })
    //bangzhu 
    $(".you1").mouseenter(function(){
        $(".active1").css({"border":"1px solid #969696","background-color":"#fff","border-bottom":"none","box-sizing":"border-box"})
        $(".active1 span").css({"border-top":"none","border-bottom":"4px solid #cccccc"})
        $(".dropdownmenu1").css("display","block");
    })
    $(".dropdownmenu1").hover(function(){
        $(this).css("display","block");
        $(".active1").css({"border":"1px solid #969696","background-color":"#fff","border-bottom":"none","box-sizing":"border-box"})
        $(".active1 span").css({"border-top":"none","border-bottom":"4px solid #cccccc"})
    },function(){
        $(this).css("display","none");
        $(".active1").css({"background-color":"#f7f7f7","border":"none"});
        $(".active1 span").css({"border-bottom":"none","border-top":"4px solid #cccccc"});
    })
    //网站导航
    $(".daohang").hover(function(){
        $(".active2").css({"border":"1px solid #f7f7f7","background-color":"#fff","border-bottom":"none","box-sizing":"border-box"});
        $(".subnav").show();
        $(".daohang~span").css({"border-top":"none","border-bottom":"4px solid #cccccc"});
    },function(){
        $(".subnav").hide();
        $(".active2").css({"border":"none","background-color":"#f7f7f7"});
        $(".daohang~span").css({"border-bottom":"none","border-top":"4px solid #cccccc"});
    })
    //左浮窗
    $(".leftnav dl").hover(function(i){
        var index = $(this).index();
        $(this).addClass("lei").siblings().removeClass("lei");
        $(".content").eq(index).addClass("con").siblings().removeClass("con");
    },function(){
        $(this).removeClass("lei");
        $(".content").removeClass("con")
    })
    $(".content").hover(function(){
        let index = $(this).index();
        $(this).addClass("con");
        $(".leftnav dl").eq(index-1).addClass("lei");
    },function(){
        $(this).removeClass("con");
        $(".leftnav dl").removeClass("lei");
    })
    //右浮窗
    $(".msgbox ul li").hover(function(){
        let index = $(this).index();
        $(this).children("p").end().siblings().children("p").show();
    },function(){
        $(this).children("p").end().siblings().children("p").hide();
    })
    //轮播
    var count = 0 ;
    var lock = true;
    if(lock){
        var timer = setInterval(function(){
            count++;
            if(count === $("#sliderList li").length){
                count = 0;
                $("#sliderList").css({"left":"0"});
                count++
            }
            if(count === $("#sliderList li").length-1){
                $("#numList li").eq(0).addClass("hover").siblings().removeClass("hover");
            }
            $("#sliderList").stop().animate({"left":-$("#sliderList li").outerWidth()*count},800)
            $("#numList li").eq(count).addClass("hover").siblings().removeClass("hover");
        },3000)
    }

    $("#numList li").hover(function(){
        clearInterval(timer);
        var index = $(this).index();
        $("#sliderList").stop().animate({"left":-$("#sliderList li").outerWidth()*index},800);
        $("#numList li").eq(index).addClass("hover").siblings().removeClass("hover");
    },function(){
        var index = $(this).index();
        setInterval(function(){
             index++;
             if(index === $("#sliderList li").length){
                index = 0;
                 $("#sliderList").css({"left":"0"});
               index++;
             }
             if(index === $("#sliderList li").length-1){
                 $("#numList li").eq(0).addClass("hover").siblings().removeClass("hover");
             }
            $("#sliderList").stop().animate({"left":-$("#sliderList li").outerWidth()*index},800)
            $("#numList li").eq(index).addClass("hover").siblings().removeClass("hover");
         },3000)
    })
    //加入购物车
    $(".goods .goodsList ul li").hover(function(){
        $(this).children(".car").stop().animate({"bottom":"10"},200)
    },function(){
        $(this).children(".car").stop().animate({"bottom":"-25"},400)
    })
    //shui
    $(".shui").hover(function(){
        $(this).css({"background-color":"#a4f031"});
    },function(){
        $(this).css({"background-color":"#76ac25"});
    })
    //加入购物车
    $(".productbox .prolist ul li").hover(function(){
        $(this).children().children(".car").stop().animate({"bottom":"0"},200)
    },function(){
        $(this).children().children(".car").stop().animate({"bottom":"-25"},400)
    })
})
