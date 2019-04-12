import { car, cdr, isPair } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

export const header = () => console.log('Welcome to the Brain Games!');
export const condition = str => console.log(str);
export const askName = () => readlineSync.question('May I have your name? ');
export const greet = (name, str = 'Hello') => console.log(`${str} ${name} !`);
export const ask = question => readlineSync.question(`Question:  ${question} \nYour answer: `);
export const isAnswerCorrect = (usersAnswer, rightAnswer) => usersAnswer === rightAnswer;
export const answerIsCorrect = () => console.log('Correct!');
export const win = (userName, str = 'Congratulations,') => console.log(`${str} ${userName}`);
export const answerIsIncorrect = (userAnswer, rightAnswer, userName) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
  console.log(`Let's try again, ${userName}`);
};


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
  header();
  condition(cond);
  const userName = askName();
  greet(userName);
  const iter = (acc) => {
    if (acc === 0) {
      win(userName);
      return;
    }
    const { rightAnswer, items } = game();
    const userAnswer = ask(toString(items));
    if (isAnswerCorrect(userAnswer, rightAnswer)) {
      answerIsCorrect();
      iter(acc - 1);
    } else {
      answerIsIncorrect(userAnswer, rightAnswer, userName);
    }
  };
  iter(numOfQuestion);
};
