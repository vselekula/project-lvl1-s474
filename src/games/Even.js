#!/usr/bin/env node
import { generateRandomNumber, toString } from '../utils';
import createGame from '..';

const isEven = num => num % 2 === 0;
const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const checkIfEven = num => (isEven(num) ? 'yes' : 'no');

const generateGameData = () => {
  const question = toString(generateRandomNumber(0, 10));
  const rightAnswer = checkIfEven(question);
  return { rightAnswer, question };
};
export default () => {
  createGame(gameDescription, generateGameData);
};
