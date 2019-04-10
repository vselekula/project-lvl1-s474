#!/usr/bin/env node
import { isEven, randomNumber } from '../utils';
import brainGames from '..';

const condition = 'Answer "yes" if number even otherwise answer "no".';
const generateData = () => randomNumber(0, 10);
const checkIfEven = num => (isEven(num) ? 'yes' : 'no');

const game = () => {
  const items = generateData();
  const rightAnswer = checkIfEven(items);
  return { rightAnswer, items };
};
export default () => {
  brainGames(condition, game);
};
