import createGame from '..';
import { generateRandomNumber } from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const calculateDividor = (x, y) => {
  if (y === 0) {
    return x;
  }
  return calculateDividor(y, x % y);
};

const generateGameData = () => {
  const a = generateRandomNumber(0, 100);
  const b = generateRandomNumber(0, 100);
  const question = `${a} ${b}`;
  const rightAnswer = String(calculateDividor(a, b));
  return { rightAnswer, question };
};

export default () => {
  createGame(gameDescription, generateGameData);
};
