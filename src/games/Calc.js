#!/usr/bin/env node
import { cons, car, cdr } from 'hexlet-pairs';
import { generateRandomNumber, toString } from '../utils';
import createGame from '..';

const gameDescription = 'What is the result of the expression?';
const arrayOfOperators = ['+', '-', '*'];
const arrayLen = arrayOfOperators.length;
const generateData = () => {
  const a = generateRandomNumber(0, 10);
  const b = generateRandomNumber(0, 10);
  const operation = arrayOfOperators[generateRandomNumber(0, arrayLen - 1)];
  return cons(a, cons(operation, b));
};
const calculateExpression = (expression) => {
  const x = car(expression);
  const operation = car(cdr(expression));
  const y = cdr(cdr(expression));
  switch (operation) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error('Как так получилось — не понятно');
  }
};
const generateGameData = () => {
  const question = generateData();
  const rightAnswer = calculateExpression(question);
  return { rightAnswer: toString(rightAnswer), question: toString(question) };
};
export default () => {
  createGame(gameDescription, generateGameData);
};
