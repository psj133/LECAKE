var http=require("http");
var arr=[];
var count=0;
var server=http.createServer(function (req,res) {
    var data="";
    req.on("data",function (d) {
        data+=d;
    })
    req.on("end",function () {
        var reqObj=JSON.parse(data);
        res.writeHead(200,{"content-type":"text/plain",'Access-Control-Allow-Origin':'*'});
            if(reqObj.type===2){
                arr.push(reqObj);
            }else if(reqObj.type===1){
                for(var i=0;i<arr.length;i++){
                    if(reqObj.username===arr[i].username&&reqObj.password===arr[i].password) {
                        count++;
                    }
                }
                if(count===arr.length){
                     res.write(JSON.stringify({bool:true,id:1}));
                }else {
                     res.write(JSON.stringify({bool:false,id:0}));
                }

            }

        res.end();
    })
})
server.listen(1006,'localhost',function () {
    console.log("服务开启");
})