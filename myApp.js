var express = require("express");
var app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

process.env.MESSAGE_STYLE = "uppercase";

app.get("/json", function (req, res) {
  // Variable assignment as object
  var response = {
    message: "Hello json",
  };

  if (process.env.MESSAGE_STYLE === "uppercase") {
    //Override message attribute value based on condition
    response.message = response.message.toUpperCase();
  }

  return res.json(response);
});
