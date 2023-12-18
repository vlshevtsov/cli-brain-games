import readlineSync from 'readline-sync';

export const askUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export const getUserAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const run = (desc, getQA) => {
  console.log('Welcome to the Brain Games!');
  const user = askUserName();
  console.log(`Hello, ${user}!`);
  console.log(`${desc}`);

  const ask = (attempt = 1) => {
    if (attempt > 3) {
      console.log(`Congratulations, ${user}!`);
      return null;
    }

    const qa = getQA();
    const question = qa[0];
    const correctAnswer = qa[1];
    const userAnswer = getUserAnswer(question);

    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer}' mis wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${user}!`);
      return null;
    }
    console.log('Correct!');
    return ask(attempt + 1);
  };

  ask();
};