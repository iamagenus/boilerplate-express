let express = require("express");
let app = express();
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
const mySecret = process.env["MESSAGE_STYLE"];
app.get("/json", (req, res) => {
  res.json(
    process.env.MESSAGE_STYLE == "uppercase"
      ? { message: "HELLO JSON" }
      : { message: "Hello json" },
  );
});
