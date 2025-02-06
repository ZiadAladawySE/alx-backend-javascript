export default function hasValuesFromArray(set, array) {
  const checker = array.every((item) => set.has(item));
  return checker;
}
