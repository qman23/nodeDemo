const express = require('express');
const app = express();

//内置中间件（静态web服务/静态托管）
app.use(express.static("static"));

//应用级中间件
app.use((req,res,next)=>{
    console.log("my first middleware!");
    next();//必须调用，否则路由地址无响应
});

app.get("/",(req,res)=>{
    res.send("default page");
});

//路由级中间件
app.get('/user/admin',(req,res,next)=>{
    console.log("经过路由级中间件");
    next();
});

app.get('/user/:id',(req,res)=>{
    res.send("hello,"+req.params['id']);
});

//错误处理中间件，应用于路由匹配不到的情况
app.use((req,res,next)=>{
    res.status(404).send("404");
    next();
})

app.listen(3000);