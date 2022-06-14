var url = require('url');
var adr = 'http://localhost:8080/default.html?year=2079&month=Jestha';
var q = url.parse(adr,true);

console.log(q.host); //returns localhost
console.log(q.pathname);    //returns 8080
console.log(q.search);  // returns default/html

var sampdata = q.query;     //returns year=2079&month=Jestha
console.log(sampdata.month); //returns Jestha