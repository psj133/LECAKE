//随机颜色
function randomColor1(){
    var str="#"+Math.floor(Math.random()*255).toString(10);
    return str;
}
function randomColor2(){
    var str="#"+Math.floor(Math.random()*0xffffff).toString(16);
    return str
}
function randomColor3() {
    var r=Math.floor(Math.random()*255);
    var g=Math.floor(Math.random()*255);
    var b=Math.floor(Math.random()*255);
    var str="rgb("+r+','+g+','+b+")";
    return str;
}
function randomColor4(){
    var r=Math.floor(Math.random()*255);
    var g=Math.floor(Math.random()*255);
    var b=Math.floor(Math.random()*255);
    var a=Math.random().toFixed(1);
    var str="rgba("+r+','+g+','+b+','+a+")";
    return str;
}
//获取两个数中的任意数
function randomInt(min, max){
    return Math.floor(Math.random()*(max-min)) + min;
}
//文本节点过滤
function textNodefilter(nodelist){
    var temp = [];
    for(var i=0; i<nodelist.length; i++){
        if(nodelist[i].nodeType == 1){
            temp.push(nodelist[i]);
        }
    }
    return temp;
}
//对象样式
function getStyle(ele){
    if(ele.currentStyle) {
        return ele.currentStyle;//ie
    } else {
        return getComputedStyle(ele);//非ie
    }
}
//转换成数组
function toArray(arr){
    var a = [];
    for(var i = 0; i<arr.length; i++){
        a.push(arr[i]);
    }
    return a;
}
//console.log
function log(){
    if(console && console.log){
        console.log(arguments);
    } else {
        alert(arguments);
    }
}

//计算一个dom元素的PageX/Y
function getPagePosition(target){
    var sumLeft = target.offsetLeft;
    var sumTop = target.offsetTop;
    while(target.offsetParent != null){
        sumLeft += target.offsetParent.offsetLeft;
        sumTop += target.offsetParent.offsetTop;

        target = target.offsetParent;
    }
    return {
        pageX : sumLeft,
        pageY : sumTop
    };
}

//封装事件监听的添加
function addEventHandler(ele, eventType, fn, isCapture){
    if(ele.addEventListener) {
        ele.addEventListener(eventType, fn, isCapture? false : isCapture);
    } else {
        ele.attachEvent("on"+eventType, fn);
    }
}

//限定一个数字的大小范围
function section(val, min, max) {
    return Math.max(min, Math.min(max, val));
}

//绑定一个函数的this指向
function bind(fn, target) {
    target._cbk_Bind_Target = fn;
    return function(){
        target._cbk_Bind_Target();
    };
}
(function(){
    if(!document.getElementsByClassName){
        document.getElementsByClassName = function(classname){
            var allEle = document.getElementsByTagName("*");
            var temp = [];
            for(var i=0; i<allEle.length; i++){
                if( allEle[i].className.indexOf(classname) != -1){
                    temp.push( allEle[i] );
                }
            }
            return temp;
        }
    }
})();
//进行className筛选
function getByClass(aparent,aclass) {
    var arr=[];
    var allEle=aparent.getElementsByTagName("*");
    for(var i=0;i<allEle.length;i++){
        if(allEle[i].className==aclass){
            arr.push(allEle[i]);
        }
    }
    return arr;
}
//创建元素
function createEle(type,parent,content,style,eventType,eventCallBack) {
    if (!type) return;
    var elem = document.createElement(type);
    if (parent) {
        parent.appendChild(elem);
    }
    if (content) {
        switch (type) {
            case "input":
                elem.value = content;
                break;
            case "img":
                elem.src = content;
                break;
            default:
                elem.textContent = content;
                break;
        }
    }
    if (style) {
        setStyle(elem, style);
    }
    if (eventType && eventCallBack) {
        elem.addEventListener(eventType, eventCallBack);
    }
    return elem;
}
//设置样式
function setStyle(ele,style) {
    for(var str in style){
        ele.style[str]=style[str];
    }
}
//获取对象
   function getObject(url) {
    if(!~url.indexOf("?")) return;//查找url中是否有？，如果没有直接跳出
    url=url.split("?")[1];//如果有？，我们取出？后面的内容重新赋给url
    var obj={};//新建一个对象
    var arr;//新建变量arr
    if(!~url.indexOf("&")){//查找url中是否有&如果没有&做下面的内容
        if(!~url.indexOf("=")) return;//在查找是否有=，如果没有=，就直接跳出
        arr=url.split("=");//如果查找到=号，我们用=号分成一个数组，两个元素
        obj[arr[0]]=isNaN(Number(arr[1])) ? arr[1] : Number(arr[1]);//用=前面的内容作为obj的属性，=后面的内容作为该属性的值
        return obj;//因为没有&，还有一个值，因此直接将对象返回
    }
    arr=url.split("&");//用&切割为数组，因为上面判断了，这里就有&符
    var arr1;//定义arr1变量
    var bool=false;//初始是false
    for(var i=0;i<arr.length;i++){//循环上面用&切割的数组
        if(!~arr[i].indexOf("=")) continue;//如果数组中那一个字符中没有=，就跳到下一个循环
        arr1=arr[i].split("=");//用=将这个字符切割两个元素的数组
        obj[arr1[0]]=isNaN(Number(arr1[1])) ? arr1[1] : Number(arr1[1]);//将这个字符的=前的值作为属性，=后作为这个属性的值
        bool=true;//如果给obj中写入一个属性和值，这时候，就让bool为true
    }
    //如果bool是true
    if(bool) return obj;//最后返回这个对象
}
//两点间的距离
function getDistance(point1,point2) {
    return Math.sqrt(Math.pow(point2.x-point1.x,2)+Math.pow(point2.y-point1.y,2));
}
//随机颜色rgba();
function randomColor5(alpha) {
    var color="rgba(";
    for(var i=0;i<3;i++){
        color+=Math.floor(Math.random()*256)+",";
    }
    if(!isNaN(alpha) && (alpha || alpha===0)){
        if(alpha>1) alpha=1;
        return color+alpha+")";
    }
    return color+Number(Math.random().toFixed(1))+")";
}
//获取屏幕的宽高
function client() {
    if(window.innerWidth){
        return{
            width:window.innerWidth,
            height:window.innerHeight
        }
    }else if(document.compatMode==="CSS1Compat"){
        return{
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        }
    }
    return{
        width:document.body.clientWidth,
        height:document.body.clientHeight
    }
}
//通过id获取
function $(id) {
    return typeof id==="string"?document.getElementById(id):null;
}
//事件添加删除
function addEvent(elem,type,callback) {
    try {
        elem.addEventListener(type,callback);
    }catch (e){
        elem.attachEvent("on"+type,callback);
    }
}

function removeEvent(elem,type,callback) {
    try {
        elem.removeEventListener(type,callback);
    }catch (e){
        elem.detachEvent("on"+type,callback);
    }
}
//加载图片
function loadImg(arr,callBack,type) {
    var img=new Image();
    img.arr=arr;
    img.list=[];
    img.num=0;
    img.type=type;
    img.callBack=callBack;
    img.addEventListener("load",loadHandler);
    img.src=arr[img.num];
}
var LOAD_IMAGE_FINISH="load_image_finish";
function loadHandler(e) {
    this.list.push(this.cloneNode(false));
    this.num++;
    if(this.num===this.arr.length){
        if(this.callBack){
            this.callBack(this.list,this.type);
            return;
        }
        var evt=new Event(LOAD_IMAGE_FINISH);
        evt.list=this.list;
        evt.types=this.type;
        document.dispatchEvent(evt);
        return;
    }
    this.src=this.arr[this.num];
}
//获取id
var dic={};
function getElemId(elem) {
    if(elem.id){
        dic[elem.id]=elem;
    }
    for(var i=0;i<elem.children.length;i++){
        getElemId(elem.children[i]);
    }
    return dic;
}
//深复制
function objClone(targetObj,sourceObj){
    var names=Object.getOwnPropertyNames(sourceObj);
    for(var i=0;i<names.length;i++){
        var desc=Object.getOwnPropertyDescriptor(sourceObj,names[i]);
        if(typeof desc.value=="object"&&desc.value!==null){
            var obj={};
            Object.defineProperty(obj,names[i],{
                configurable:desc.configurable,
                writable:desc.writable,
                enumerable:desc.enumerable,
                value:obj
            })
            objClone(obj,desc.value);
        }
        else {
            Object.defineProperty(targetObj,names[i],desc);
        }
    }
    return targetObj;
}
//寄生式继承
function extend(subClass,supClass){
    function F() {}
    F.prototype=supClass.prototype;
    subClass.prototype=new F();
    subClass.prototype.constructor=subClass;
    subClass.superClass=supClass.prototype;
    if(supClass.prototype.constructor===Object.prototype.constructor){
        supClass.prototype.constructor=supClass;
    }
}