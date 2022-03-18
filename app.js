const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("the home page");
});
app.listen(5000, () => {
  console.log("server started");
});
