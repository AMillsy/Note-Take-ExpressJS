const fs = require("fs");
const { response } = require("../routes");

class fsUtils {
  readFromFile(fileLocation) {
    let data;
    fs.readFile(fileLocation, (err, response) => {
      err ? (data = console.error(err)) : (data = JSON.parse(response));
    });
    console.log(data);
    return data;
  }
}

module.exports = { fsUtils };
