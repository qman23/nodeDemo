/*
//错误示例，不能打印出正确结果
function getData(){
    setTimeout(()=>{
        var name = "lee";
        return name;
    },1000);
}

console.log(getData());
 */

const { resolve } = require("path");
const { rejects } = require("assert");

/**
 利用回调函数输出正确结果
 */
 function getData(callbck){
     setTimeout(()=>{
         var name = "lee";
         callbck(name);
     },1000);
 }

getData((aaa)=>{
    console.log(aaa);
});

/*
利用ES6的Promise输出异步调用的输出结果
*/
var p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        var name = "lee";
        resolve(name);
    },500);
})
p.then((data)=>{
    console.log(data);
});
/*
利用ES6的Promise输出异步调用的输出结果 -- 写法二
*/
function getData(resolve,reject){
    setTimeout(()=>{
        var name = "lee";
        resolve(name);
    },500);
}

var p1 = new Promise(getData);
p1.then((data)=>{
    console.log(data);
});
