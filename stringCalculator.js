function Add(stringNum) {
  if (!stringNum) {
    return 0;
  }

  const numArray = stringNum.split(",").map((n) => parseInt(n, 10));
  const sum = numArray.reduce((acc, curVal) => acc + curVal, 0);
  return sum;
}

module.exports = {
  Add,
};
