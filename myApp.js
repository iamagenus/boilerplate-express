const mySecret = process.env["MESSAGE_STYLE"];
let express = require("express");
let app = express();
console.log("Hello World");
app.get("/", (req, res) => res.send("Hello Express"));
app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));
app.use("/public", express.static(__dirname + "/public"));
app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});
app.get("/json", (req, res) =>
  res.json(
    process.env.MESSAGE_STYLE == "uppercase"
      ? { message: "HELLO JSON" }
      : { message: "Hello json" },
  ),
);
app.get(
  "/now",
  function (req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function (req, res, next) {
    res.json({ time: req.time });
  },
);
app.get("/:word/echo", (req, res) => {
  res.json({
    echo: req.params.word,
  });
});
module.exports = app;
