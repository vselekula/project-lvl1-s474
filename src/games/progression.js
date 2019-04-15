import { cons } from 'hexlet-pairs';
import createGame from '../index';
import { generateRandomNumber, toString } from '../utils';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;
const generateQuestion = (indexOfMissingElement, start, adder) => {
  const iter = (acc) => {
    const item = (acc === indexOfMissingElement) ? '..' : start + (acc * adder);
    if (acc === progressionLength - 1) {
      return item;
    }
    return cons(item, iter(acc + 1));
  };
  return iter(0);
};

const generateGameData = () => {
  const diff = generateRandomNumber(0, 10);
  const step = generateRandomNumber(0, 10);
  const indexOfMissingElement = generateRandomNumber(0, progressionLength);
  const rightAnswer = (diff + (indexOfMissingElement * step)).toString();
  const question = toString(generateQuestion(indexOfMissingElement, diff, step));
  return { rightAnswer, question };
};

export default () => {
  createGame(gameDescription, generateGameData);
};
