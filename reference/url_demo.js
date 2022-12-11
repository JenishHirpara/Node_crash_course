const url = require('url'); // whats the use of this line??

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

console.log(myUrl.href);
console.log(myUrl.host);
console.log(myUrl.search);
console.log(myUrl.searchParams);
myUrl.searchParams.append("abc",500);
console.log(myUrl.searchParams);
myUrl.searchParams.forEach((value,name) => console.log(`${name} : ${value}`));