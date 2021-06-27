 const fs = require('fs');
 const path = require('path');
 const chalk = require('chalk');
 const mimeType = require('mime-types');
 
 
 // 读取图片文件转换为 base64 编码
 function parse (file) {
   const filePath = path.resolve(file); // 原始文件地址
   const fileMimeType = mimeType.lookup(filePath); // 获取文件的 memeType
 
   // 如果不是图片文件，则退出
   if (!fileMimeType.toString().includes('image')) {
     console.log(chalk.red(`Failed! ${filePath}:\tNot image file!`));
     return;
   }
 
   // 读取文件数据
   let data = fs.readFileSync(filePath);
   data = new  Buffer.from(data).toString('base64');
 
   // 转换为 data:image/jpeg;base64,***** 格式的字符串
   const base64 = 'data:' + fileMimeType + ';base64,' + data;
   return base64
 }
