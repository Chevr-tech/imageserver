const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("the home page");
});

app.listen(process.env.PORT, () => {
  console.log("server started");
});
