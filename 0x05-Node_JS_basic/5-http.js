const http = require('http');

const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;
  if (url === '/') {
    res.write('Hello Holberton School!');
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const studentslist = await countStudents(process.argv.slice(2)[0]);
      res.end(`${studentslist.join('\n')}`);
    } catch (error) {
      res.end(error.message);
    }
  }
  res.statusCode = 404;
  res.end();
});
app.listen(1245, '127.0.0.1', () => {});
module.exports = app;
