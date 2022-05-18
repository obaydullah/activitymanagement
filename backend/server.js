import express from "express";
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(8000, () => {
  console.log("Server is running on 8000 port");
});