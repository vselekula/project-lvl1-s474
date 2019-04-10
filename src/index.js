import { car, cdr, isPair } from 'hexlet-pairs';
import {
  header, askName, win, answerIsIncorrect, answerIsCorrect, greet, ask, isAnswerCorrect, condition,
} from './utils';

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
