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
app.use(function (req, res, next) {
  console.log(req.method + " " + req.path + " " + "-" + " " + req.ip);
  next();
});
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  function (req, res) {
    res.json({ time: req.time });
  },
  app.get("/echo/:word", (req, res) => {
    let word = req.params.word

    let jsonObj = {echo: word,echo: word}
    res.json(jsonObj)
    }),

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
