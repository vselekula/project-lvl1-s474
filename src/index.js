// import { car, cdr, isPair } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const isAnswerCorrect = (usersAnswer, rightAnswer) => usersAnswer === rightAnswer;

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
    const userAnswer = readlineSync.question(`Question:  ${question} \nYour answer: `);
    if (isAnswerCorrect(userAnswer, rightAnswer)) {
      console.log('Correct!');
      iter(acc - 1);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${userName}`);
    }
  };
  iter(numOfQuestion);
};
