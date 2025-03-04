function Add(stringNum) {
  if (!stringNum) {
    return 0;
  }

  let delimiter = /\n|,/;
  const customDelimiterMatch = stringNum.match(/^\/\/(\[.*\])\n/);
  if (customDelimiterMatch) {
    const delimiters = customDelimiterMatch[1]
      .slice(1, -1)
      .split("][")
      .map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    delimiter = new RegExp(delimiters.join("|"));
    stringNum = stringNum.slice(customDelimiterMatch[0].length);
  } else if (stringNum.startsWith("//")) {
    delimiter = stringNum[2];
    stringNum = stringNum.substring(4);
  }

  const numArray = stringNum.split(delimiter).map((n) => parseInt(n, 10));
  const negativeNumArray = numArray.filter((num) => num < 0);
  if (negativeNumArray.length) {
    const negativeNums = negativeNumArray.join(", ");
    throw new Error(`negative numbers not allowed: ${negativeNums}`);
  }

  const initVal = delimiter === "*" ? 1 : 0;

  const sum = numArray
    .filter((ele) => ele < 1001)
    .reduce((acc, curVal) => {
      return initVal ? acc * curVal : acc + curVal;
    }, initVal);
  return sum;
}

module.exports = {
  Add,
};
