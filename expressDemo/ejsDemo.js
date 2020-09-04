/**
 1、安装 npm i ejs --save
 2、app.set("view engine","ejs")
 3、使用(默认加载模板引擎文件夹是 views)
 resp.render("index",{})


 配置模板引擎
 app.engine("html",ejs.__express)
 app.set("view engine","html")

 配置静态web目录
 app.user(express.static("static"))
 */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//parse application/x-www-form-urllencoded
app.use(bodyParser.urlencoded({ extended: false}));
//parse application/json
app.use(bodyParser.json());

//设置模板引擎
app.set("view engine","ejs");

app.get("/",(req,resp)=>{
    let person = {
        name:"赛特",
        age:23
    };
    resp.render("index",{
        "date":new Date(),
        "person":person,
        "hContent":"<h3>内容来自后台11<h3>"
    });
})

app.get("/login",(req,res)=>{
    res.render("login",{});
});

app.post("/doLogin",(req,res)=>{
    console.log("执行提交");
    console.log(req.body);
    res.send("欢迎 "+req.body.username);
});

app.listen(3000);