var btn=document.querySelector('button');
var form=document.querySelector("form");
form.addEventListener("submit",function (e) {
    e.preventDefault();
})
var aInput=document.querySelectorAll('input');
var aSpan=document.querySelectorAll('span')
var btn=document.querySelector('button');
var bool=false;
aInput[0].addEventListener('blur',function (e) {
    if(this.value.length==0) {
        aSpan[0].textContent="*请输入手机号";
        return;
    }
    var reg1=/^1[34578]\d{9}$/;
    if(reg1.test(this.value)){
        bool=true;
        aSpan[1].textContent="手机号输入格式正确";
        aSpan[1].style.color='green';
    }else {
        bool=false
        aSpan[1].textContent="手机号输入格式错误";
        aSpan[1].style.color='red';
    }

})
aInput[1].addEventListener('blur',function (e) {
    if(this.value.length==0) {
        bool=true;
        this.textContent="*请输入密码";
        return;
    }
    var reg2=/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
    if(reg2.test(this.value)){
        bool=true;
        aSpan[2].textContent="密码输入格式正确";
        aSpan[2].style.color='green';
    }else {
        bool=false;
        aSpan[2].textContent="密码输入格式错误";
        aSpan[2].style.color='red';
    }
})









btn.onclick=function () {
        var username=$("#tel").val();
        var password=$("#pwd").val();
        var obj={username:username,password:password,type:2};
        ajax(JSON.stringify(obj))
}
function ajax(data) {
    var xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft,XMLHTTP");
    xhr.open("post","http://localhost:1006");
    xhr.send(data);
    xhr.onreadystatechange=function () {
        if(xhr.readyState==4){
            if(xhr.status==200){
                window.location.href="login.html"
            }else {
                alert("失败");
            }
        }
    }
}