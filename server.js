const express = require("express");
const path = require("path");
const api = require("./routes/index");

//Create App
const app = express();

//Port
PORT = process.env.PORT || 3001;

//Setup the App
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(`/api`, api);
app.use(express.static("public"));

//Api calls n
app.get(`/`, (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
