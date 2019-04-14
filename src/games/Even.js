#!/usr/bin/env node
import { generateRandomNumber } from '../utils';
import createGame from '..';

const isEven = num => num % 2 === 0;
const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const generateGameData = () => {
  const question = generateRandomNumber(0, 10);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return { rightAnswer, question };
};
export default () => {
  createGame(gameDescription, generateGameData);
};
