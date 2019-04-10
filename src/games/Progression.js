import { cons } from 'hexlet-pairs';
import brainGames from '../index';
import { randomNumber } from '../utils';

const condition = 'What number is missing in the progression?';
const progressionLength = 10;
const generateData = (indexOfMissingElement, start, adder) => {
  const iter = (acc) => {
    const item = (acc === indexOfMissingElement) ? '..' : start + (acc * adder);
    if (acc === progressionLength - 1) {
      return item;
    }
    return cons(item, iter(acc + 1));
  };
  return iter(0);
};

const game = () => {
  const start = randomNumber(0, 10);
  const adder = randomNumber(0, 10);
  const indexOfMissingElement = randomNumber(0, progressionLength);
  const rightAnswer = start + (indexOfMissingElement * adder);
  const items = generateData(indexOfMissingElement, start, adder);
  return { rightAnswer, items };
};

export default () => {
  brainGames(condition, game);
};
