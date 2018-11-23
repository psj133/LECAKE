
window.onmousewheel=function () {
    var top=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
    if(top>=220){
        document.querySelector(".nav").style.top=0+"px";
    }else if(top<220){
        document.querySelector(".nav").style.top=-60+"px";
    }
}
window.onmouscroll=function () {
    var top=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
    if(top>=220){
        document.querySelector(".nav").style.top=0+"px";
    }else if(top<220){
        document.querySelector(".nav").style.top=-60+"px";
    }
}
document.querySelector(".public").addEventListener('mouseover',function (e) {
    document.querySelector('.bottom').style.display="block";
});
document.querySelector(".public").addEventListener('mouseout',function (e) {
    document.querySelector('.bottom').style.display="none";
});
var style1={
    width:"100%",
    height:"300px"
}
var style2={
    width:"80%",
    height:"300px",
    margin:"0 auto"
}
var style3={
    width:"10%",
    height:"300px",
    float:"left",
    lineHeight:"300px"
}
var style4={
    width:"25%",
    height:"300px",
    float:"left",
    lineHeight:"300px"
}
var style5={
    width:"15%",
    height:"300px",
    float:"left",
    lineHeight:"300px",
    color:"orangered"
}
var content=document.querySelector(".content");
var data=[
    {
        "selected":"false",
        "img":"../img/cake1.jpg",
        "name":"雪域牛乳芝士蛋糕",
        "price":198
    },
    {
        "selected":"true",
        "img":"../img/cake2.jpg",
        "name":"数字蛋糕",
        "price":198
    },
    {
        "selected":"false",
        "img":"../img/cake3.jpg",
        "name":"美刀刀蛋糕",
        "price":298
    },
    {
        "selected":"false",
        "img":"../img/cake4.jpg",
        "name":"环游世界.春夏季蛋糕",
        "price":218
    },
    {
        "selected":"false",
        "img":"../img/cake5.jpg",
        "name":"盛夏.彩虹千层蛋糕",
        "price":318
    },
    {
        "selected":"false",
        "img":"../img/cake6.jpg",
        "name":"她的蛋糕",
        "price":888
    },
    {
        "selected":"false",
        "img":"../img/cake7.jpg",
        "name":"数字蛋糕520款",
        "price":594
    },
    {
        "selected":"true",
        "img":"../img/cake8.jpg",
        "name":"怦然心动蛋糕",
        "price":198
    }]
document.querySelector(".jiesuan").style.display='none';
localStorage.shopData=JSON.stringify(data);
var container,shopData,aBox,leftBn,rightBn,index,inputNum;
var num=Number(document.querySelectorAll("i")[1].textContent);
const Count="count";
const SELECT_ITEM_SHOP="select_item_shop";
init();
function init() {
    shopData=JSON.parse(localStorage.shopData);
    index=location.search.split("?")[1];
    var selectAll=document.querySelectorAll(".all")[1];
    selectAll.addEventListener("change",selectHandler);
    // for(var i=0;i<data.length;i++){
        createDiv(content,shopData[index]);
    // }
    document.querySelector(".jiesuan").style.display='block';
    content.children[0].style.display="none";
    content.children[1].style.display="none";
    aBox=document.querySelectorAll(".box");
    num=aBox.length.toString();
    if(aBox.length===0){
        document.querySelector(".jiesuan").style.display='none';
        content.children[0].style.display="block";
        content.children[1].style.display="block";
    }
    document.querySelectorAll("i")[1].textContent=num;
    document.querySelectorAll("i")[2].textContent=num;
    document.addEventListener(Count,countHandler);
    document.addEventListener(SELECT_ITEM_SHOP,selectItemShopHandler);
}

function countHandler(e) {
    if(document.querySelector(".pri")==null) return
      var sum= Number(document.querySelector(".pri").innerText.split("￥")[1]);
      sum=e.num*e.data.price;
      var price=document.querySelectorAll(".pri");
      for(var i=0;i<price.length;i++){
          price[i].innerText="￥"+sum;
      }
    }
function selectItemShopHandler(e) {
    if (e.all === true) {
        if (document.querySelectorAll(".all")[1].checked) {
            document.querySelector('.left').children[2].onclick=function () {
                for(var i=0;i<aBox.length;i++){
                    aBox[i].remove();
                    document.querySelectorAll("i")[1].textContent="0";
                    content.children[0].style.display="block";
                    content.children[1].style.display="block";
                    document.querySelector(".jiesuan").style.display='none';
                }
            };
            var check = document.querySelectorAll('.check');
            for (var i = 0; i < check.length; i++) {
                check[i].checked = true;
            }
            document.querySelectorAll("i")[3].textContent = check.length.toString();
            document.querySelectorAll(".right")[1].firstElementChild.firstElementChild.textContent = (check.length * Number(document.querySelector(".pri").textContent.split("￥")[1])).toString();
        } else {
            var check = document.querySelectorAll('.check');
            for (var i = 0; i < check.length; i++) {
                check[i].checked = false;
            }
            document.querySelectorAll("i")[3].textContent = "0";
            document.querySelectorAll(".right")[1].firstElementChild.firstElementChild.textContent = "0";
        }
        ;
    } else if (e.all === false) {
        var check = document.querySelectorAll('.check');
        var count = 0
        for (var i = 0; i < check.length; i++) {
            if (check[i].checked) {
                count++;
            }
        }
        if (count === check.length) {
            document.querySelectorAll(".all")[1].checked = true;
        } else {
            document.querySelectorAll(".all")[1].checked = false;
        }

        if (e.select === true) {
            var count = document.querySelectorAll("i")[3].textContent;
            var final = document.querySelectorAll(".right")[1].firstElementChild.firstElementChild.textContent;
            document.querySelectorAll("i")[3].textContent =document.querySelectorAll('i')[1].innerText;
            document.querySelectorAll(".right")[1].firstElementChild.firstElementChild.textContent = ((parseInt(document.querySelectorAll("i")[3].textContent)) * e.data.price).toString();
            var left=document.querySelectorAll('.plu');
            var right=document.querySelectorAll('.add');
            for(var i=0;i<left.length;i++){
                left[i].addEventListener('click',clickHandler1)
                right[i].addEventListener('click',clickHandler1)
            }
        } else if (e.select === false) {
            document.removeEventListener(Count,countHandler);
            var count1 = document.querySelectorAll("i")[3].textContent;
            var final1 = document.querySelectorAll(".right")[1].firstElementChild.firstElementChild.textContent;
            document.querySelectorAll("i")[3].textContent = "0";
            document.querySelectorAll(".right")[1].firstElementChild.firstElementChild.textContent = (Number(document.querySelectorAll("i")[3].textContent) * e.data.price).toString();
        }

    }
}
function clickHandler1(e) {
    var input=document.querySelector('.input');
    var check = document.querySelectorAll('.check');
        if(this.textContent==="-"){
            for (var i = 0; i < check.length; i++) {
                if(check[i].checked===true){
                    document.querySelectorAll('i')[3].textContent=(Number(input.value)).toString();
                }
            }
        }else if(this.textContent==="+"){
            var val=Number(input.value);
            for (var i = 0; i < check.length; i++) {
                if(check[i].checked===true){
                    document.querySelectorAll('i')[3].textContent=(val).toString();
                }
            }

        }
    document.querySelectorAll(".right")[1].firstElementChild.firstElementChild.textContent=(Number(document.querySelectorAll('i')[3].textContent)*data[index].price).toString();
}
function createDiv(parent,data) {
    if(!data) return;
    container=createEle("div",parent,null,style1);
    container.className="box";
    var shop_list=createEle("div",container,null,style2);
    var select_area=createEle("div",shop_list,data.selected,style3);
    var img_area=createEle("div",shop_list,null,style4);
    var img=new Image();
    img.src=data.img;
    img.style.height=260+"px";
    img.style.width=200+"px";
    img.style.margin="20px auto";
    img_area.appendChild(img);
    var name_area=createEle("div",shop_list,data.name,style4);
    select_area.data=data;
    if(select_area.textContent=="false"||select_area.textContent=="true"){
        if(select_area.textContent){
            select_area.textContent="";
        }
        var checkBox=document.createElement("input");
        checkBox.className='check';
        checkBox.type="checkbox";
        checkBox.className="check";
        select_area.appendChild(checkBox);
        checkBox.checked=false;
        checkBox.addEventListener('change',selectHandler)
    }
    var count_area=createEle("div",shop_list,null,style4);
    countNum(count_area,data);
    var price=createEle("div",shop_list,"小计",style5);
    var span=createEle("span",price,"￥"+data.price)
    span.className="pri"
}
function selectHandler(e) {
    var data=this.parentElement.data;
    var evt=new Event(SELECT_ITEM_SHOP);
    evt.all=!data;
    evt.select=this.checked;
    evt.data=data;
    document.dispatchEvent(evt);

}
function countNum(parent,data){
    var div=document.createElement("div");
    parent.appendChild(div);
    div.data=data;
    div.className="countNum";
    leftBn=document.createElement("button");
    leftBn.className='plu';
    leftBn.textContent="-";
    div.appendChild(leftBn);
    var input=document.createElement("input");
    input.className="input";
    input.type="text";
    input.value="1";
    div.appendChild(input);
    rightBn=document.createElement("button");
    rightBn.className='add';
    rightBn.textContent="+";
    div.appendChild(rightBn);
    div.input=input;
    div.data=data;
    leftBn.addEventListener("click",addItemBnHandler);
    rightBn.addEventListener("click",addItemBnHandler);
    input.addEventListener("input",changeNumInputHandler);
    input.addEventListener("blur",changeNumInputHandler);
    return div;
}

function addItemBnHandler(e) {
    var input=this.parentElement.input;
    if(this.textContent==="-"){
        num--;
        document.querySelectorAll("i")[1].textContent=num;
        document.querySelectorAll("i")[2].textContent=num;
        if(parseInt(input.value)===1){
            alert("删除成功")
            this.parentElement.parentElement.parentElement.parentElement.remove();
            if(document.querySelectorAll("i")[1].textContent==="0"&&document.querySelectorAll("i")[2].textContent==="0"){
                content.children[0].style.display="block";
                content.children[1].style.display="block";
                document.querySelector(".jiesuan").style.display='none';
            }
        }
        input.value=parseInt(input.value)-1;
    }else if(this.textContent==="+"){
        num++;
        document.querySelectorAll("i")[1].textContent=num;
        document.querySelectorAll("i")[2].textContent=num;
        if(parseInt(input.value)===99) return;
        input.value=parseInt(input.value)+1;
    }
    var evt=new Event(Count);
    evt.num=parseInt(input.value);
    evt.data=this.parentElement.data;
    document.dispatchEvent(evt);
}


function changeNumInputHandler(e) {
    if(e.type==="input"){
        this.value=this.value.replace(/[^0-9]/g,"");
        if(this.value==="0"){
            this.value="1";
        }
        if(this.value.length===0){
            this.value="1";
        }
        if(this.value.length>2){
            this.value="99";
        }
    }else if(e.type==="blur"){
        var evt=new Event(Count);
        evt.num=parseInt(this.value);
        evt.data=this.parentElement.data;
        document.dispatchEvent(evt);
    }
}




