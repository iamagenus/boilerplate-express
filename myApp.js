require("dotenv").config();

let express = require("express");
let app = express();

module.exports = app;

console.log("Hello World");
console.log(__dirname);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  let msg = "Hello json";
  const messageStyle = process.env.MESSAGE_STYLE;
  if (messageStyle === "uppercase") {
    msg = msg.toUpperCase();
  }
  res.json({
    message: msg,
  });
});
