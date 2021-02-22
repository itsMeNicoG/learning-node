const https = require("https");
const port = 8000;
const fs = require("fs");

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

https
  .createServer(options, (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text /plain");
    res.end("Hello, world!");
  })
  .listen(port);
