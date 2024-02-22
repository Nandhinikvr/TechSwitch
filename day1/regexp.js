const fs = require('fs');
const rs = fs.readFileSync('test.txt', 'utf8')
let content = rs.split(' ')
let emailAddressDict=[]

const regex1 = /((@[a-z\d-]+)\.([a-z\d-]){2,}(\.[a-z]{2,})?)+$/gi
for (let i = 0; i<content.length;i++){
  if (regex1.test(content[i])) {
    var domain = content[i].match(regex1);
    if (emailAddressDict[domain] === undefined) {
      emailAddressDict[domain] = 1;
    } else {
      var value = emailAddressDict[domain];
      emailAddressDict[domain] = value+1;
    }
  }
}
console.log(emailAddressDict);
