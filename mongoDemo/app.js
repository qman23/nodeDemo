//引入mongodb
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

//db url
const url = 'mongodb://localhost:27017';
//db name
const dbName = 'demo';

//实例化mongo client

const client = new MongoClient(url,{ useUnifiedTopology: true });
//链接db
client.connect(function(err){
    assert.equal(null,err);
    console.log("connected successfully!");

    const db = client.db(dbName);
    //1.查询
    // db.collection("user").find({"age":36}).toArray((err,data)=>{
    //     console.log(data);
    //     //关闭db连接
    //     client.close();
    // })

    //2.增加
    db.collection("user").insertOne({"name":"Tom","age":45},(err,data)=>{
        if(err){
            console.log(err);
        }
        console.log(data);
        client.close();
    });
});
