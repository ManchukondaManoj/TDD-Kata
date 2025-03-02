function Add(stringNum) {
  if (!stringNum) {
    return 0;
  }

  let delimiter = /\n|,/;
  if (stringNum.startsWith("//")) {
    if (stringNum[2] === "[") {
      const closingBracketIndex = stringNum.indexOf("]");
      delimiter = stringNum.slice(3, closingBracketIndex);
      stringNum = stringNum.slice(closingBracketIndex + 2); //+2 is for \n chars
    } else {
      delimiter = stringNum[2];
      stringNum = stringNum.substring(4);
    }
  }

  const numArray = stringNum.split(delimiter).map((n) => parseInt(n, 10));
  const negativeNumArray = numArray.filter((num) => num < 0);
  if (negativeNumArray.length) {
    const negativeNums = negativeNumArray.join(", ");
    throw new Error(`negative numbers not allowed: ${negativeNums}`);
  }
  const sum = numArray.reduce(
    (acc, curVal) => (curVal > 1000 ? acc : acc + curVal),
    0
  );
  return sum;
}

module.exports = {
  Add,
};
