const fs= require('fs');
const path = require('path');
//fs.writeFileSync('banana.txt','this is a apple file');


const dirPath=path.join(__dirname,'files');
//console.log(dirpath);

// for(i=0;i<5;i++){
//    fs.writeFileSync("hello"+i+".txt","a simple textf file");
// }



fs.readdir(dirPath,(err,files)=>{
  // console.warn(files)
  files.forEach((item)=>{
    console.log(item);
  })
})