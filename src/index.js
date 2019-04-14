import readlineSync from 'readline-sync';

const numOfQuestion = 3;

export default (gameDescription, gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName} !`);
  const iter = (acc) => {
    if (acc === 0) {
      console.log(`Congratulations, ${userName}`);
      return;
    }
    const { rightAnswer, question } = gameData();
    console.log(`Question:  ${question} `);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
    iter(acc - 1);
  };
  iter(numOfQuestion);
};
