//正则验证用户名，密码
var aInput=document.querySelectorAll('input');
var aSpan=document.querySelectorAll('span')
var btn=document.querySelector('#login');
btn.addEventListener('click',function (e) {
    var reg1=/^1\d{10}$/;
    var reg2=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    var reg3= /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
    if(reg1.test(aInput[0].value)||reg2.test(aInput[0].value)){
        aSpan[0].textContent="用户名输入格式正确";
        aSpan[0].style.color='green';
    }else {
        aSpan[0].textContent="用户名输入格式错误";
        aSpan[0].style.color='red';
    }
    if(reg3.test(aInput[1].value)){
        aSpan[1].textContent="密码输入格式正确";
        aSpan[1].style.color='green';
    }else {
        aSpan[1].textContent="密码输入格式错误";
        aSpan[1].style.color='red';
    }
})
$('form').submit(function (e) {
    e.preventDefault();
})
btn.onclick=function () {
    if(aInput[0].value.length==0) {
        aSpan[0].textContent="用户名不能为空";
        return;
    }
    if(aInput[1].value.length==0) {
        aSpan[1].textContent="密码不能为空";
        return;
    }
    var username=$("#username").val();
    var password=$('#password').val();
    var obj={username:username,password:password,type:1};
    ajax(JSON.stringify(obj));
}
function ajax(data) {
    var xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft,XMLHTTP");
    xhr.open("post","http://localhost:1006");
    xhr.send(data);
    xhr.onreadystatechange=function () {
        if(xhr.readyState==4){
            if(xhr.status==200){
                if(JSON.parse(this.responseText).bool===true){
                    window.location.href="index.html?"+JSON.parse(this.responseText).id;
                }else if(JSON.parse(this.responseText).bool===false){
                    alert("该用户不存在");
                };
            }else {
                alert("失败");
            }
        }
    }
}

