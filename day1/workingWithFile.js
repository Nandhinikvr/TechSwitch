let content=[];
let counter =0;
let startindex=[];
const fs = require('fs');
const rs=fs.readFileSync('EmailText.txt','utf8')
content=rs.split('\n')

// for(let i=0; i<content.length;i++)
// {
    
//     startindex[i]=content[i].indexOf('@');
    
//     if(startindex[i]>0)
//     {
//         if ((content[i].substring(startindex[i], startindex[i]+13) == '@softwire.com')) { counter = counter + 1 }
//     }
// }
// console.log(counter)

for( i=0; i<content.length; i++)
if(content[i].includes("@softwire.com") ){counter++}
console.log(counter);