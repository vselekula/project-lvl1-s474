import { car, cdr, cons } from 'hexlet-pairs';
import brainGames from '..';
import { randomNumber } from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const generateData = () => {
  const a = randomNumber(0, 100);
  const b = randomNumber(0, 100);
  return cons(a, b);
};
const calculateDividor = (x, y) => {
  if (y === 0) {
    return x;
  }
  return calculateDividor(y, x % y);
};

const game = () => {
  const question = generateData();
  const rightAnswer = calculateDividor(car(question), cdr(question));
  return { rightAnswer, question };
};

export default () => {
  brainGames(gameDescription, game);
};
