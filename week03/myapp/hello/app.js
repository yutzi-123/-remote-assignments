var express = require("express");
var app = express(); //產生app物件
app.use(express.static(__dirname + '/Public'));
//express 託管靜態檔案
app.listen(3000, function () {
  console.log(" host is ready !")
}); //啟動伺服器在 http://localhost:3000/ 的地方



function adding(count) {
  let result = 0
  for (i = 1; i <= count; i++){
    result = result + i
  }
  return `<h3>${result}</h3>`
}

app.get("/", function (req, res) {
  res.send("<h3> Hello, My Server! </h3>");
}); //當使用者連接到伺服器根目錄的時候，可以做一些回應

app.get("/getData", function (req, res) {
  let number = req.query.number
  let checkNum = isNaN(number)
  let toNumber = parseFloat(number)

  if (!checkNum) {

    if (Number.isInteger(toNumber)) {
      res.send(adding(toNumber));
    } else {
      res.send("<h3> not interger </h3>");
    }
  
  } else {
  
    if (number === "xyz") {
      res.send("<h3> Wrong Parameter </h3>");
    } else if (number === undefined) {
      res.send("<h3> Lack of Parameter </h3>");
    }
    else {
      res.send("<h3> parameter undefined </h3>");
    }
    
  }

});




