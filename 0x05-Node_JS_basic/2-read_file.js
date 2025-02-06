const fs = require('fs');

function countStudents(path) {
  let content;
  try {
    content = fs.readFileSync(path);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  content = content.toString().split('\n');
  let studentslist = content.filter((item) => item);
  studentslist = studentslist.map((item) => item.split(','));
  const studentsnumber = studentslist.length ? studentslist.length - 1 : 0;
  console.log(`Number of students: ${studentsnumber}`);
  const fields = {};
  for (const a in studentslist) {
    if (a !== 0) {
      if (!fields[studentslist[a][3]]) fields[studentslist[a][3]] = [];

      fields[studentslist[a][3]].push(studentslist[a][0]);
    }
  }
  delete fields.field;
  for (const k of Object.keys(fields)) {
    console.log(
      `Number of students in ${k}: ${fields[k].length}. List: ${fields[k].join(', ')}`,
    );
  }
}
module.exports = countStudents;
