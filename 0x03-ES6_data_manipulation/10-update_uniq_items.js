export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [k] of map) {
    if (map.get(k) === 1) map.set(k, 100);
  }

  return map;
}
