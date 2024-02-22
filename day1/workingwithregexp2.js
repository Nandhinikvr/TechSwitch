const fs = require('fs');
const rs = fs.readFileSync('test.txt', 'utf8')
content = rs.split(' ')
let softwireCounter = 0;
let emailAddressCounter = 0;
let emailMap = new Map();
const regEx = /@softwire.com/g;
//const regEx = /^@(s[a-z]+e)\.([a-z]{3})$/gi;
const regex1 = /((@[a-z\d-]+)\.([a-z\d-]){2,}(\.[a-z]{2,})?)+$/gi
for (let i = 0; i<content.length;i++){
//content.forEach((address) => {
  //console.log(content[i])
  // if(regEx.test(address))
  //     counter+=1;
  if (regEx.test(content[i])) {
    //console.log(content[i].match(regEx))
    // console.log(content[i].match(regEx).length)
    softwireCounter += content[i].match(regEx).length;
  }
  // console.log(rs.match(regex1))
  //   console.log(rs.match(regex1).length)
  if (regex1.test(content[i])) {
   
    console.log(typeof(content[i].match(regex1)))
    // console.log(content[i].match(regex1).length)
    emailAddressCounter += content[i].match(regex1).length
    console.log(emailMap.has(content[i].match(regex1)))
    let contentString = content[i].match(regex1).join('')
    console.log(contentString)
    if (emailMap.has((contentString))){
      console.log(emailMap.get(contentString))
      emailMap.set(content[i],emailMap.get(contentString+1))
    }else{
      console.log('entered else')
      emailMap.set(contentString,1)
      console.log(emailMap.get(contentString))
    }
  }


}
console.log(emailMap)
console.log(softwireCounter)
console.log(emailAddressCounter)
//console.log(counter)

//console.log(regex1.(content))
