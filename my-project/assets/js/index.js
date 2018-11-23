//top部分
$('#concerned').mouseover(function () {
    $('#wx').show();
})
$('#concerned').mouseout(function () {
    $('#wx').hide();
})
$('#wx').mouseout(function () {
    $(this).hide();
})
//search部分
$("#city").click(function () {
    $('.container').fadeTo("fast",0.3);
    $('.tanchu').show();
})

$("#city1").click(function () {
    $('.container').fadeTo("fast",0.3);
    $('.tanchu').show();
})
$(".current").css("float",'left');
$(".close").css("float",'right');
$(".all").css("cursor","pointer");
$(".close").css("cursor","pointer");
$(".city-list>a:first").addClass("selected");
$(".city-list a").hover(function () {
    $(this).addClass("selected");
},function () {
    $(this).removeClass("selected");
})
$(".city-list a").click(function () {
    $(".tanchu").hide();
    $('.container').fadeTo("fast",1);
    $("#city").empty();
    $("#city").text($(this).text());
    $("#city1").text($(this).text());
    $(".current>a").empty().text($(this).text());
})
$(".close").click(function () {
    $(".tanchu").hide();
    $('.container').fadeTo("fast",1);
})
//导航栏
$(document).on("mousewheel scroll",function () {
    var top=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
    if(top>=220){
        $('.nav').animate({
            top:'0'
        },16)
    }else if(top<220){
        $('.nav').animate({
            top:'-60px'
        },16)
    }

})
$(".list>li").mouseover(function () {
    $(this).children().addClass('active');
})
$(".list>li").mouseout(function () {
    $(this).children().removeClass('active');
})
$(".droplist>li").mouseover(function () {
    $(this).children().addClass('active');
})
$(".droplist>li").mouseout(function () {
    $(this).children().removeClass('active');
})
$(".li1:last").hover(function () {
    $(this).children().show();
},function () {
    $("#droplist1").hide();
});
$(".li1").hover(function () {
    $(this).children().addClass("active");
},function () {
    $(this).children().removeClass("active");
})
$('#group1').hover(function () {
    $(".login").show();
    $(".traingle").show();
},function () {
    $(".login").hide();
    $(".traingle").hide();
})
$(".login").hover(function () {
    $(".login").show();
    $(".traingle").show();
},function () {
    $(".login").hide();
    $(".traingle").hide();
})
//轮播图
$("#carousel_1").FtCarousel({
    index: 0,
    auto: true,
    time: 2000,
    indicators: false,
    buttons: true
});
$("#carousel_2").FtCarousel({
    index: 0,
    auto: false,
});
//商品
$('.shop>ul>li').hover(function (e) {
    $(this).css({
        "background":"#fcedef",
        'transition':'1s'
    })
},function () {
    $(this).css("background","");

});

$(".cake").hover(function () {
        $(this).css({
            transition:"1s",
            "transform":"scale(1.03)"
        })
     }, function () {
        $(this).css({
            transition:"1s",
            "transform":"scale(1)"
        })
     });
$(".price>a>span").hover(function () {
    $(this).css("text-decoration","underline")
},function () {
    $(this).css("text-decoration","none")
});
//礼品
$(".gifts").hover(function () {
    $(this).css({
        transition:"1s",
        "transform":"scale(1.03)"
    })
}, function () {
    $(this).css({
        transition:"1s",
        "transform":"scale(1)"
    })
});
//底部
$('.public').mouseover(function () {
    $(".public>img:last").show();
})
$('.public').mouseout(function () {
    $(".public>img:last").hide();
})
$(".public>img:last").mouseout(function () {
    $(this).hide();
})
//发送数据
var links=document.querySelectorAll(".link");
var arr=Array.from(links);
for(var i=0;i<arr.length;i++){
    arr[i].setAttribute('href',"details.html?"+i);
}