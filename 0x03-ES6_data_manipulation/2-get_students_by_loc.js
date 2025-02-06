export default function getStudentsByLocation(studentlist, city) {
  return studentlist.filter((a) => a.location === city);
}
