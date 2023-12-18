import { getRandomNumber, isEven } from '../utils.js';
import { run } from '../index.js';

const desc = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQA = () => {
  const question = getRandomNumber(100);
  let correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => run(desc, getQA);