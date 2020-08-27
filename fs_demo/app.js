const fs = require("fs");

/**
 //测试是文件还是文件夹
function isFileOrDirectory(path){
    fs.stat(path,(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(`${path}是文件夹:${data.isDirectory()}`);
        console.log(`${path}是文件:${data.isFile()}`);
     })
}

isFileOrDirectory("./html");
isFileOrDirectory("./html/hi.html");
 */

 /*
 //创建文件夹
 
fs.mkdir("./css",(err)=>{
    if(err){
        console.log(err);
        return;
    }
});
 */
/*
//写文件
fs.writeFile("./html/hi.html","你好---通过fs写入",(err)=>{
    if(err){
        console.log(err);
        return;
    }
});

*/

/*

//追加文件
fs.appendFile("./css/style.css","body{color:red}\n",(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("追加文件");
})
*/
/**

//读取文件
fs.readFile("./html/hi.html",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data.toString());
})
 */

 //判断服务器上是否有upload目录，如果没有创建目录，如果有不做操作

 fs.stat("./upload",(err,data)=>{
     if(err ){
         if(err.errno===-4058){

            console.log("no folder found, create one");
            fs.mkdir("./upload",(err)=>{
               if(err){
                   console.log("mkdir error..");
                   console.log(err);
                   return;
               }
            });
         }
         return;
     }
     if(data.isDirectory()){
         console.log("upload folder existed!");
     }
 })