export const isEven = number => !(number % 2);

export const getRandomNumber = base => Math.floor(Math.random() * base);

export const getEuclidGCD = (a, b) => {
  if (a < b) return getEuclidGCD(b, a);
  if (b === 0) return a;
  return getEuclidGCD(b, a % b);
};

export const getProgression = (fn, start, count) => {
  return new Array(count).fill(0).map((elem, index) => fn(start + index));
}