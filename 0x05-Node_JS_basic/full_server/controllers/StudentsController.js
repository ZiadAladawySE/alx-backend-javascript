import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response, db) {
    readDatabase(db)
      .then((fields) => {
        const studentslist = [];
        let message;
        studentslist.push('This is the list of our students');
        for (const k of Object.keys(fields)) {
          message = `Number of studentslist in ${k}: ${
            fields[k].length
          }. List: ${fields[k].join(', ')}`;
          studentslist.push(message);
        }
        response.send(200, `${studentslist.join('\n')}`);
      })
      .catch(() => {
        response.send(500, 'Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response, db) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.send(500, 'Major parameter must be CS or SWE');
    } else {
      readDatabase(db)
        .then((fields) => {
          const studentslist = fields[major];
          response.send(200, `List: ${studentslist.join(', ')}`);
        })
        .catch(() => response.send(500, 'Cannot load the database'));
    }
  }
}

export default StudentsController;
