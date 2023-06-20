const fs = require("fs");
const util = require("util");
const { response } = require("../routes");
const res = require("express/lib/response");

class fsUtils {
  readFromFile = util.promisify(fs.readFile);

  
}

module.exports = { fsUtils };
