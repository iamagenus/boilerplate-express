let express = require("express");
let app = express();
console.log("Hello World");
app.get("/", function (req, res) {
  res.send((absolutePath = __dirname + "/relativePath/file.ext"));
});
module.exports = app;
