const express = require("express");
require("colors");
const app = express();
const port = 5001;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server says hello" });
});

app.listen(port, () => {
  console.log(`App is running at port ${port}`.bgMagenta.white);
});
