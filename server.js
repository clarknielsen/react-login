const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();

// "session" variable to remember user logged in
var loggedIn = false;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/auth", function(req, res) {
  // send back "session" status
  res.json(loggedIn);
});

app.post("/login", function(req, res) {
  // check user against "database"
  if (req.body.username === "clark" && req.body.password === "potato123") {
    loggedIn = true;
  }

  res.json(loggedIn);
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
