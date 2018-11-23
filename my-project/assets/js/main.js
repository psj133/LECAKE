var data=[
    {
        "id" : 1,
        "name" : "雪域牛乳芝士蛋糕",
        "price" : "￥198",
        "style" : ["人气爆款"],
        "cakeImg" : "../img/cake1.jpg"
    },
    {
        "id" : 2,
        "name" : "数字蛋糕",
        "price" : "￥198",
        "style" : ["NEW"],
        "cakeImg" : "../img/cake2.jpg"
    },
    {
        "id" : 3,
        "name" : "美刀刀蛋糕",
        "price" : "￥298",
        "style" : ["人气爆款"],
        "cakeImg" : "../img/cake3.jpg"
    },
    {
        "id" : 4,
        "name" : "环游世界·春夏季蛋糕",
        "price" : "￥218",
        "style" : ["人气爆款"],
        "cakeImg" : "../img/cake4.jpg"
    },
    {
        "id" : 5,
        "name" : "盛夏·彩虹千层蛋糕",
        "price" : "￥318",
        "style" : ["NEW"],
        "cakeImg" :"../img/cake5.jpg"
    },
    {
        "id" : 6,
        "name" : "她的蛋糕",
        "price" : "￥888",
        "style" : ["NEW","限量高定"],
        "cakeImg" : "../img/cake6.jpg"
    },
    {
        "id" : 7,
        "name" : "数字蛋糕520款",
        "price" : "￥594",
        "style" : ["NEW"],
        "cakeImg" : "../img/cake7.jpg"
    },
    {
        "id" : 8,
        "name" : "怦然心动蛋糕",
        "price" : "￥198",
        "style" : ["NEW"],
        "cakeImg" : "../img/cake8.jpg"
    }
]
var data1= [{
        "id": 1,
        "name": "金砖形费南雪礼盒",
        "price": "￥298",
        "style": ["顺丰物流配送"],
        "giftImg": [
           "../img/list_18263.jpg"
        ]
    },
    {
        "id": 2,
        "name": "蔓越莓曲奇礼盒(礼盒)（樱花粉）",
        "price": "￥98",
        "style": [],
        "giftImg": [
            "../img/list_17474.jpg"
        ]
    },
    {
        "id": 3,
        "name": "千层蝴蝶酥FOR me(原味)",
        "price": "￥98",
        "style": [],
        "giftImg": [
            "../img/list_17018.jpg"
        ]
    },
    {
        "id": 4,
        "name": "乐熊熊曲奇礼盒",
        "price": "￥128",
        "style": [],
        "giftImg": [
            "../img/list_13291.jpg"
        ]
    }
]
var shops=document.querySelector(".shop");
var ul=document.createElement("ul");
shops.appendChild(ul);
for(var i=0;i<data.length;i++){
    createItem(data[i]);
}

function createItem(data) {
    var li=document.createElement('li');
    ul.appendChild(li)
    var img=new Image();
    img.addEventListener("click",function () {
        window.location.href="details.html?"+data.id;
    })
    img.src=data.cakeImg;
    img.className='cake';
    li.appendChild(img)
    var div1=document.createElement('div');
    div1.className="content";
    li.appendChild(div1);
    var name=document.createElement('p');
    name.innerText=data.name;
    div1.appendChild(name);
    var style=document.createElement('span');
    style.textContent=data.style;
    div1.appendChild(style);
    var div2=document.createElement("div");
    div2.className='price';
    li.appendChild(div2);
    var price=document.createElement("p");
    price.textContent=data.price;
    div2.appendChild(price);
    var join=document.createElement('a');
    join.textContent="加入购物车"
    join.href="shopcart.html";
    div2.appendChild(join)
    var span=document.createElement("span");
    span.className='join';
    span.addEventListener("mouseover",mouseHandler);
    span.addEventListener("mouseout",mouseHandler);
    span.textContent=">";
    div2.appendChild(span)
}
function mouseHandler(e) {
    if(e.type=="mouseover"){
        this.textContent="+";
    }else if(e.type=="mouseout"){
        this.textContent=">";
    }
}
var main=document.querySelector('main');
var ul1=document.createElement('ul');
ul1.className='gift';
main.appendChild(ul1);
for(var i=0;i<data1.length;i++){
    createGift(data1[i]);
}
function createGift(data) {
    var lis=document.createElement("li");
    ul1.appendChild(lis);
    var img=new Image();
    img.className='gifts';
    img.src=data.giftImg;
    lis.appendChild(img);
    var contents=document.createElement('div');
    contents.className='content'
    lis.appendChild(contents);
    var name=document.createElement('p');
    name.innerText=data.name;
    contents.appendChild(name);
    var style=document.createElement('span');
    style.textContent=data.style;
    contents.appendChild(style);
    var div2=document.createElement("div");
    div2.className='price';
    lis.appendChild(div2);
    var price=document.createElement("p");
    price.textContent=data.price;
    div2.appendChild(price);
    var join=document.createElement('a');
    join.textContent="加入购物车"
    join.href="shopcart.html";
    div2.appendChild(join)
    var span=document.createElement("span");
    span.addEventListener("mouseover",mouseHandler);
    span.addEventListener("mouseout",mouseHandler);
    span.textContent=">";
    join.appendChild(span)
}

var sign=document.querySelectorAll(".sign");
var index=location.search.split("?")[1];
if(index==="1"){
    for(var i=0;i<sign.length;i++){
        sign[i].innerText="";
    }
    document.getElementById("group1").style.color='red';
    document.querySelector('.right').firstElementChild.innerText="已登录";
    document.querySelector('.exit').style.display="inline-block";
}
document.querySelector('.exit').onclick=function (e) {
    sign[0].innerText="登录";
    sign[1].innerText="注册";
    document.getElementById("group1").style.color='';
    document.querySelector('.right').firstElementChild.innerText="";
    document.querySelector('.exit').style.display="none";
}
var join=shops.querySelectorAll(".join");
for(var i=0;i<join.length;i++){
    join[i].index=i;
    join[i].addEventListener("click",joinHandler);
}
function joinHandler(e) {
    alert("加入购物车成功");
    window.location.href='shopcart.html?'+this.index;
}


