import { car, cdr, cons } from 'hexlet-pairs';
import brainGames from '..';
import { randomNumber } from '../utils';

const condition = 'Find the greatest common divisor of given numbers.';
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
  const items = generateData();
  const rightAnswer = calculateDividor(car(items), cdr(items));
  return { rightAnswer, items };
};

export default () => {
  brainGames(condition, game);
};
