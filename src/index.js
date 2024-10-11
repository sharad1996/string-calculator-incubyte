function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\\n");
    const customDelimiter = parts[0].slice(2);
    delimiter = new RegExp(`[${customDelimiter},\n]`);
    numbers = parts[1];
  }

  return sumNumbers(numbers, delimiter);
}

function sumNumbers(numbers, delimiter) {
  const splitNumbers = numbers.split(delimiter).map(Number);
  const negatives = splitNumbers.filter((n) => n < 0);
  if (negatives.length) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }
  return splitNumbers.reduce((acc, curr) => acc + curr, 0);
}

if (require.main === module) {
  const input = process.argv.slice(2).join(",");
  try {
    const result = add(input);
    console.log(`Result: ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

module.exports = add;
