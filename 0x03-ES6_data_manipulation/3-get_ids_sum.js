export default function getStudentIdsSum(studentlist) {
  return studentlist.reduce((total, a) => total + a.id, 0);
}
