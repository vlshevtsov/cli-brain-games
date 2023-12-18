import { run } from '../index.js';
import { getRandomNumber, getEuclidGCD } from '../utils.js';

const desc = 'Find the greatest common divisor of given numbers.';

const getQA = () => {
  const a = getRandomNumber(100);
  const b = getRandomNumber(100);
  const question = `${a} ${b}`;
  const correctAnswer = getEuclidGCD(a, b);

  return [question, correctAnswer.toString()];
};

export default () => run(desc, getQA);
