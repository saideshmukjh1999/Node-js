const app = require("./app");
console.log(app);
console.log(app.z());

const arr = [5, 3, 3, 9, 8, 5, 7, 5];

let result = arr.filter((item) => {
  return item > 5;
});
console.log(result);

const fs = require("fs");
fs.writeFileSync("Sai.txt", "Name: Sairaj Deshmukh");
