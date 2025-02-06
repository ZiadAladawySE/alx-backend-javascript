const fs = require('fs');

export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error(err));
        return;
      }
      let studentslist = data.toString().split('\n').filter((item) => item);
      studentslist = studentslist.map((item) => item.split(','));
      const fields = {};
      for (const a in studentslist) {
        if (a !== 0) {
          if (!fields[studentslist[a][3]]) fields[studentslist[a][3]] = [];
          fields[studentslist[a][3]].push(studentslist[a][0]);
        }
      }
      delete fields.field;
      resolve(fields);
    });
  });
}
