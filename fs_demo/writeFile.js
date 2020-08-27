var fs = require('fs');

const str = "你好，我被stream写入\n";
var writeStream = fs.createWriteStream("./files/output.txt");


for(var i=0;i<10000;i++){
    writeStream.write(str,"UTF-8");
}
//标记文件末尾
writeStream.end();
writeStream.on('finish',()=>{
    console.log("写入完成");
});
writeStream.on('error',(err)=>{
    console.log(err);
});