export default function getListStudentIds(studentlist) {
  let idlist = [];
  if (studentlist instanceof Array) {
    idlist = studentlist.map((item) => item.id);
  }
  return idlist;
}
