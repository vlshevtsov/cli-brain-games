import { run } from '../index.js';
import { getRandomNumber, getProgression } from '../utils.js';

const desc = 'What number is missing in the progression?';

const getQA = () => {
  const a = getRandomNumber(100);
  const d = getRandomNumber(10) + 1;
  const start = getRandomNumber(50);
  const missed = getRandomNumber(10);
  const progression = getProgression(n => a + (d * (n - 1)), start, 10);

  const correctAnswer = progression.splice(missed, 1, ['..']);
  const question = progression.join(' ');

  return [question, correctAnswer.toString()];
};

export default () => run(desc, getQA);