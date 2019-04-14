#!/usr/bin/env node
import { generateRandomNumber, toString } from '../utils';
import createGame from '..';

const gameDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculateExpression = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error('Как так получилось — не понятно');
  }
};
const generateGameData = () => {
  const a = generateRandomNumber(0, 10);
  const b = generateRandomNumber(0, 10);
  const operation = operators[generateRandomNumber(0, operators.length - 1)];
  const question = `${a} ${operation} ${b}`;
  const rightAnswer = calculateExpression(a, b, operation);
  return { rightAnswer: toString(rightAnswer), question: toString(question) };
};
export default () => {
  createGame(gameDescription, generateGameData);
};
