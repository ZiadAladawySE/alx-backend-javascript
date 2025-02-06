export default function createIteratorObject(report) {
  const res = [];
  for (const x of Object.values(report.allEmployees)) {
    res.push(...x);
  }
  return res;
}
