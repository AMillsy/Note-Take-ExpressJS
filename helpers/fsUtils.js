const fs = require("fs");
const util = require("util");

class fsUtils {
  // Make into a promise so that you can do .thens
  readFromFile = util.promisify(fs.readFile);

  writeToFile(content, fileLocation) {
    this.readFromFile(fileLocation).then((response) => {
      let data = [];

      data = JSON.parse(response);

      content.id = Date.now();
      data.push(content);
      this.#writeDatatoFile(data, fileLocation);
    });
  }

  deleteDataFromFile(id, fileLocation) {
    if (isNaN(id)) return "MUST BE A NUMBER";

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
