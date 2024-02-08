let express = require("express");
let app = express();

app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/json", (req, res) => {
  let response = { message: "Hello json" };
  if (process.env.MESSAGE_STYLE === uppercase) {
    response.message = response.message.toUpperCase();
  }
  res.json(response);
});
