function mergesorted(a, b) {
  const result = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      result[k] = a[i];
      i++;
    } else {
      result[k] = b[j];
      j++;
    }
    k++;
  }

  while (i < a.length) {
    result[k] = a[i];
    k++;
    i++;
  }
  while (j < b.length) {
    result[k] = b[j];
    k++;
    j++;
  }
  return result;
}
