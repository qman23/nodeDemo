var fs = require('fs');

var readStream = fs.createReadStream("./files/output.txt");
var writeStream = fs.createWriteStream('./files/output_copy.txt');

readStream.pipe(writeStream);