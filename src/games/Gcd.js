import { car, cdr, cons } from 'hexlet-pairs';
import createGame from '..';
import { generateRandomNumber, toString } from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const generateData = () => {
  const a = generateRandomNumber(0, 100);
  const b = generateRandomNumber(0, 100);
  return cons(a, b);
};
const calculateDividor = (x, y) => {
  if (y === 0) {
    return x;
  }
  return calculateDividor(y, x % y);
};

const generateGameData = () => {
  const question = generateData();
  const rightAnswer = calculateDividor(car(question), cdr(question));
  return { rightAnswer, question: toString(question) };
};

export default () => {
  createGame(gameDescription, generateGameData);
};
