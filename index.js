const express = require("express");
const app = express();

//Listen to port
const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
  console.log("Server started its mission");
});
