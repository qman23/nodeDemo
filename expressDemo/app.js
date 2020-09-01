const express = require('express');

const app = express();

app.get("/",(req,resp)=>{
    resp.send("你好,express");
});

app.get("/login",(req,resp)=>{
    resp.send("login page");
});
app.post("/register",(req,resp)=>{
    resp.send("register page");
});


app.get("/user",(req,resp)=>{
    resp.send("show user");
});
//动态路由
app.get("/user/:id",(req,resp)=>{
    resp.send("get user "+req.params['id']);
});

//get传值
app.get("/product",(req,resp)=>{
    console.log(req.query);
    resp.send("get products");
});

app.listen(3000);