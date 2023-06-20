const note = require("express").Router();
const { fsUtils } = require("../helpers/fsUtils");
const util = new fsUtils();
note.get("/", (req, res) => {
  res.json(util.readFromFile("./db/db.json"));
});

module.exports = note;
