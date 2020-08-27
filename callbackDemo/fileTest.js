var fs = require('fs');
const { dir } = require('console');

/**
 * 是否为目录
 * @param
 */
async function isDir(path){
    return new Promise((resolve,reject)=>{
        fs.stat("./"+path,(err,data)=>{
            if(data.isDirectory()){
                resolve(true);
            }else{
                resolve(false);
            }
        })
    });

}

/**
 * 列出文件
 * @param {*} path 
 */
async function listFiles(path){
    return new Promise((resolve,reject)=>{
        
        fs.readdir(path,async (err,data)=>{
            if(err){
                console.log(err);
            }
            var arr = [];
            // console.log(data);
            for(var i=0;i<data.length;i++){
               var isD = await isDir(data[i]);
               if(isD){
                   arr.push(data[i]);
               }
            }
            console.log(arr);
            resolve(arr);
        });
        
    });
}

/**
 * 执行
 */
async function execute(){

    var dirs = await listFiles("./");
    for(var i=0;i<dirs.length;i++){
        console.log(dirs[i]);
    }
}

execute("./");

