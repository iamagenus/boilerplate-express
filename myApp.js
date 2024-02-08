let express = require("express");
let app = express();
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  const mySecret = process.env["MESSAGE_STYLE"];
  if (process.env["MESSAGE_STYLE"] == "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
});
