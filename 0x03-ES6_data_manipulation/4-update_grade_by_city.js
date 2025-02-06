export default function updateStudentGradeByCity(studentlist, city, grades) {
  if (!Array.isArray(studentlist)) {
    return [];
  }
  if (!Array.isArray(grades)) {
    return [];
  }

  const citystudents = studentlist.filter((s) => s.location === city);

  const studentgrades = citystudents.map((student) => {
    const gradestudents = grades.filter(
      (grades) => grades.studentId === student.id,
    );

    let grade;

    if (gradestudents[0]) {
      grade = gradestudents[0].grade;
    } else {
      grade = 'N/A';
    }

    return {
      ...student,
      grade,
    };
  });

  return studentgrades;
}
