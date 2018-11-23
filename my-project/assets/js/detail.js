//top部分
$('#concerned>span').mouseover(function () {
    $('#wx').show();
})
$('#concerned>span').mouseout(function () {
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
$('.tuijian>ul>li').hover(function (e) {
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
$('.public').mouseover(function () {
    $(".public>img:last").show();
})
$('.public').mouseout(function () {
    $(".public>img:last").hide();
})
$(".public>img:last").mouseout(function () {
    $(this).hide();
})
var imgArr=['../img/datu1.jpg','../img/datu3.jpg','../img/datu2.jpg','../img/datu4.jpg','../img/datu5.jpg','../img/datu6.jpg','../img/datu7.jpg','../img/datu8.jpg'];
var imgList=['../img/xueyu.jpg','../img/num.jpg','../img/dollarpc.jpg','../img/winter.jpg','../img/mer.jpg','../img/lizi.jpg','../img/caomei.jpg','../img/yw.jpg']
var nameArr=['雪域牛乳蛋糕','数字蛋糕','美刀刀蛋糕','环游世界.秋冬季蛋糕','栗子千层蛋糕','怦然心动蛋糕','提拉米苏乐脆蛋糕','雪域蓝莓芝士蛋糕']
var priceArr=["￥198","￥198","￥298","￥218","￥218","￥198","￥198","￥198"]
var banner=document.querySelector('banner');
var img=banner.firstElementChild;
var index=location.search.split("?")[1];
img.src=imgArr[index-1];
var one=document.querySelector('.one');
one.firstElementChild.textContent=nameArr[index-1];
var inner=document.querySelector('.nav-inner');
inner.firstElementChild.textContent=nameArr[index-1];
one.lastElementChild.textContent=priceArr[index-1];
inner.children[3].firstChild.textContent=priceArr[index-1];
var img=document.querySelector('.img').firstElementChild;
img.src=imgList[index];
var as=document.querySelectorAll(".a1");
for(var i=0;i<as.length;i++){
    as[i].setAttribute('href','details.html?'+i);
}
var join=document.querySelectorAll(".join");
for(var i=0;i<join.length;i++){
    join[i].index=i;
    join[i].addEventListener("click",joinHandler);
}
function joinHandler(e) {
    alert("加入购物车成功");
    window.location.href='shopcart.html?'+this.index;
}




