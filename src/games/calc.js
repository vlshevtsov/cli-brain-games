import { getRandomNumber } from '../utils.js';
import { run } from '../index.js';

const desc = 'What is the result of the expression?';

const getQA = () => {
  const a = getRandomNumber(10);
  const b = getRandomNumber(10);
  const operator = getRandomNumber(3);

  let question;
  let correctAnswer;
  switch (operator) {
    case 0:
      question = `${a} - ${b}`;
      correctAnswer = a - b;
      break;
    case 1:
      question = `${a} + ${b}`;
      correctAnswer = a + b;
      break;
    default: 
      question = `${a} * ${b}`;
      correctAnswer = a * b;
      break;
  }

  return [question, correctAnswer.toString()];
};

export default () => run(desc, getQA);