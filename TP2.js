const numbers = [2, 4, 8, 16, 32, 64];

let numbersTimesTwo = numbers.map((number) =>
  number === 2 || number === 4 ? number * 2 : number
);

numbersTimesTwo = numbers.map((number) => {
  return number === 2 || number === 4 ? number * 2 : number;
});
