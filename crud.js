const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'curd');
const filePath=`${dirPath}/apple.txt`;

//fs.writeFileSync(filePath,'This is a simple text file');

// fs.readFile(filePath,'utf8',(err , item)=>{
//     console.log(item)
// })

// //UPDATE
// fs.appendFile(filePath,'and file name is apple.txt',(err)=>{
//     if(!err){
//      console.log("file is updated")
//     }
// });


//RENAME

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err)  console.log("filename is updated");
// })


//DELETE 

fs.unlinkSync(`${dirPath}/fruit.txt`);