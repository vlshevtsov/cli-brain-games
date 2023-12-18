export const isEven = (number) => !(number % 2);

export const getRandomNumber = (base) => Math.floor(Math.random() * base);

export const getEuclidGCD = (a, b) => {
  if (a < b) return getEuclidGCD(b, a);
  if (b === 0) return a;
  return getEuclidGCD(b, a % b);
};

export const getProgression = (fn, start, count) => (
  new Array(count).fill(0).map((elem, index) => fn(start + index))
);

export const isPrime = (number) => {
  if (number < 2) return false;
  const stop = number / 2;
  const iter = (counter) => {
    if (counter > stop) return true;
    if (number % counter === 0) return false;
    return iter(counter + 1);
  };
  return iter(2);
};
