import { run } from '../index.js';
import { getRandomNumber, isPrime } from '../utils.js';

const desc = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQA = () => {
  const question = getRandomNumber(100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => run(desc, getQA);
