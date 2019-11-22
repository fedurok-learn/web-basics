const arr = [
  { value: 100, type: "USD" },
  { value: 215, type: "EUR" },
  { value: 7, type: "EUR" },
  { value: 99, type: "USD" },
  { value: 354, type: "USD" },
  { value: 12, type: "EUR" },
  { value: 77, type: "USD" }
];

const sumOfUSDLessThan100 = arr
  .filter(item => item.type == "USD" && item.value < 100)
  .reduce((accumulator, item) => item.value + accumulator, 0);
const doubledEur = arr
  .filter(item => item.type == "EUR")
  .map(item => item.value * 2);

console.log(sumOfUSDLessThan100);
console.log(doubledEur);

if (process.argv.length < 3) {
  console.log(
    "usage: %s <cost1>[currency] [cost2 cost3 ...]",
    "Example: %s 9$ 9$",
    "node ./"
  );
  process.exit(1);
} else {
  console.log(
    "Total: %d%s",
    process.argv
      .slice(2)
      .map(elem => elem.slice(0, -1))
      .reduce((e1, e2) => e1 + e2, 0),
    process.argv.slice(2)[0].slice(-1)
  );
}
