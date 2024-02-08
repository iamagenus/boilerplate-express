let express = require("express");
let app = express();
console.log("Hello World");
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});
process.env.MESSAGE_STYLE = "uppercase";

app.get("/json", function (req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({
      message: "HELLO JSON",
    });
  
});
