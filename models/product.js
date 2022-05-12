const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductFromFile = (call) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      call([]);
    } else {
      call(JSON.parse(fileContent));
    }
  });
};

module.exports = class product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(call) {
    getProductFromFile(call);
  }
};
