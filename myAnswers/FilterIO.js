var dir = process.argv[2];
var fileExtension = process.argv[3];

var fs = require('fs');
fs.readdir(dir,function(error,fileList){
  for (var i = 0; i < fileList.length; i++){
    if (fileList[i].indexOf("." + fileExtension) !== -1){
      console.log(fileList[i]);
    }
  }
});