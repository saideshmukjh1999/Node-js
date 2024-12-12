const http = require("http");

http
  .createServer((req, res) => {
    res.write("<h1>Hello this is sairaj deshmukh</h1>");
    res.end();
  })
  .listen(5000);

// const data = function datatransfer(req, res) {
//   res.write("This, is another conscept to define create server");
//   res.end();
// };

// http.createServer(data).listen(5100);
