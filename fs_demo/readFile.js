var fs = require('fs');
var readStream = fs.createReadStream("./files/output.txt","UTF-8");

var count = 0;
var str = '';
readStream.on('data',(data)=>{
    str+=data;
    count++;
});

readStream.on('error',(err)=>{
    console.log(err);
})

readStream.on('end',()=>{
    console.log(str);
    console.log(count);
})
