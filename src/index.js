import { car, cdr, isPair } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const isAnswerCorrect = (usersAnswer, rightAnswer) => usersAnswer === rightAnswer;

const numOfQuestion = 3;
const toString = (pair) => {
  if (isPair(pair)) {
    const left = toString(car(pair));
    const right = toString(cdr(pair));
    return `${left} ${right}`;
  }
  return String(pair);
};
export default (cond, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${cond}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName} !`);
  const iter = (acc) => {
    if (acc === 0) {
      console.log(`Congratulations, ${userName}`);
      return;
    }
    const { rightAnswer, question } = game();
    const userAnswer = readlineSync.question(`Question:  ${toString(question)} \nYour answer: `);
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
