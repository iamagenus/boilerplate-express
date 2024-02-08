let express = require("express");
let app = express();
console.log("Hello World");
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});
const mySecret = process.env['MESSAGE_STYLE']
response= {"message": "Hello json"}
app.get("/json", function(req, res){
  if (mySecret === "uppercase"){
     res.json({message: "Hello json".toUpperCase()});
  }
  else
    res.json({message: "Hello json"} );
