const mongoose = require('mongoose');

//建立连接
mongoose.connect("mongodb://127.0.0.1:27017/demo",{ useUnifiedTopology: true });

//with user/pwd
//mongoose.connect("mongodb://username:pwd@127.0.0.1:27017/demo");
//操作集合,定义scheme
var userSchema = mongoose.Schema({
    name:String,
    age:Number,
    status:Number
})

//定义模型
//model里面的第一个参数，注意：1.首字母大写 。2.要好数据库表(集合名称)对应
//这个模型回合模型名称相同的  复数  的数据库表建立连接
var User = mongoose.model('User',userSchema);
//指定collection
// var User = mongoose.model('User',userSchema,"user");

//查询
User.find({},(err,doc)=>{
    console.log("call find方法")
    if(err){
        console.log(err);
        return;
    }

    console.log(doc);
})
//新增
// var u = new User({
//     name:"Jim",
//     age:35,
//     status:-1
// });
// u.save((err,doc)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("操作返回数据"+doc);
// });

//修改数据
User.updateOne({"name":"Jim"},{"name":"Jim_Green"},(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});

//删除数据
User.deleteOne({"name":"Jim_Green"},(err,result)=>{
    
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
})