const express = require('express');

const studentcount = require('./3-read_file_async');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  const message = 'This is the list of our students\n';
  try {
    const studentslist = await studentcount(process.argv.slice(2)[0]);
    res.send(`${message}${studentslist.join('\n')}`);
  } catch (error) {
    res.send(`${message}${error.message}`);
  }
});
app.listen(1245, () => {});
module.exports = app;
