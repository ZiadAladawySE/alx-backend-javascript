export default function appendToEachArrayValue(array, appendString) {
  const x = [];
  for (const idx of array) {
    x.push(`${appendString}${idx}`);
  }

  return x;
}
