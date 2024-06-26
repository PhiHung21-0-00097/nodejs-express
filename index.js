const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello, I'm OtisNguyen");
});

app.listen(port, () => {
  console.log(`Đã khởi động: http://localhost:${port}`);
});





