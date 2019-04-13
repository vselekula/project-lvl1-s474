#!/usr/bin/env node
import { isEven, randomNumber } from '../utils';
import brainGames from '..';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const generateData = () => randomNumber(0, 10);
const checkIfEven = num => (isEven(num) ? 'yes' : 'no');

const game = () => {
  const question = generateData();
  const rightAnswer = checkIfEven(question);
  return { rightAnswer, question };
};
export default () => {
  brainGames(gameDescription, game);
};
