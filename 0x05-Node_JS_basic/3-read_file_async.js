const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const res = [];
      let message;
      const content = data.toString().split('\n');
      let studentslist = content.filter((item) => item);
      studentslist = studentslist.map((item) => item.split(','));
      const studentsnumber = studentslist.length ? studentslist.length - 1 : 0;
      message = `Number of students: ${studentsnumber}`;
      console.log(message);
      res.push(message);
      const fields = {};
      for (const a in studentslist) {
        if (a !== 0) {
          if (!fields[studentslist[a][3]]) fields[studentslist[a][3]] = [];
          fields[studentslist[a][3]].push(studentslist[a][0]);
        }
      }
      delete fields.field;
      for (const k of Object.keys(fields)) {
        message = `Number of students in ${k}: ${fields[k].length}. List: ${fields[k].join(', ')}`;
        console.log(message);
        res.push(message);
      }
      resolve(res);
    });
  });
}
module.exports = countStudents;
