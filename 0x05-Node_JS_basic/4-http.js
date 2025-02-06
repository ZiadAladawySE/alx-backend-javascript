const http = require('http');

const handleRequest = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
};
const app = http.createServer(handleRequest);
app.listen(1245);
module.exports = app;
