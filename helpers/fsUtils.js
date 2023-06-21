const fs = require("fs");
const util = require("util");
const { response } = require("../routes");
const res = require("express/lib/response");

class fsUtils {
  // Make into a promise so that you can do .thens
  readFromFile = util.promisify(fs.readFile);

  writeToFile(content, fileLocation) {
    this.readFromFile(fileLocation).then((response) => {
      const data = JSON.parse(response);
      content.id = data.length;
      data.push(content);
      this.#writeDatatoFile(data, fileLocation);
    });
  }

  deleteDataFromFile(id, fileLocation) {
    if (id === (null || undefined))
      return console.log("MUST HAVE ID TO DELETE");

    this.readFromFile(fileLocation).then((response) => {
      const data = JSON.parse(response);

      const returnData = data.filter((note) => note.id != id);
      console.log(returnData);
      
      this.#writeDatatoFile(returnData, fileLocation);
    });
  }

  #writeDatatoFile(data, fileLocation) {
    fs.writeFile(fileLocation, JSON.stringify(data, null, 4), (err) => {
      return err ? console.error(err) : console.log("Success", data);
    });
  }
}

module.exports = { fsUtils };
