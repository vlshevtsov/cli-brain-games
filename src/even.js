import readlineSync from 'readline-sync';
import askName from './cli.js';

const getRandomNumber = () => Math.floor(Math.random() * 100);
const isEven = number => !(number % 2);

const runEvenGame = () => {
  const userName = askName(); 
  console.log('Hello, ' + userName + '!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const askEvenNumber = (attempt = 1) => {
    const question = getRandomNumber();
    let correctAnswer = isEven(question) ? 'yes' : 'no';

    if(attempt > 3) {
      console.log(`Congratulations, ${userName}!`)
      return null;
    };

    console.log('Question: ' + question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}`);
      return null;
    }

    console.log('Correct!');
    return askEvenNumber(attempt + 1);
  }

  askEvenNumber();
};

export default runEvenGame;