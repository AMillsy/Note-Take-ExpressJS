const note = require("express").Router();
const { fsUtils } = require("../helpers/fsUtils");
const util = new fsUtils();
note.get("/", (req, res) => {
  util.readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

module.exports = note;

//Adds notes to the posts
//Need to create an id when adding notes
note.post("/", (req, res) => {
  const { title, text } = req.body;
  if (!title || !text)
    return res.json({
      status: "Failed",
      reason: "title and text field most be complete",
    });

  util.writeToFile({ title, text }, "./db/db.json");

  res.json({
    status: "Success",
    body: { title, text },
  });
});
