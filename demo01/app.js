const http = require('http');
const url = require('url');

const tools = require("./module/tools");


http.createServer((req,resp)=>{
    console.log("request url:"+req.url);

    if(req.url!='/favicon.ico'){
        var value = url.parse(req.url,true).query;
        console.log(value);
        console.log(`姓名:${value.name},年龄:${value.age}`);
    }
    resp.writeHead(200,{"Content-type": "text/html;charset=utf-8"});
    resp.write("你好<br/>");
    resp.write(tools.formatUrl("/hello"));
    resp.end();//如果不调用，则服务器一直不会结束响应
}).listen(8081);
console.log('server started on port 8081..');
