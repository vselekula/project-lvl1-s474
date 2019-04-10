#!/usr/bin/env node
import { cons, car, cdr } from 'hexlet-pairs';
import { randomNumber } from '../utils';
import brainGames from '..';

const condition = 'What is the result of the expression?';
const arrayOfOperators = ['+', '-', '*'];
const arrayLen = arrayOfOperators.length;
const generateData = () => {
  const a = randomNumber(0, 10);
  const b = randomNumber(0, 10);
  const operation = arrayOfOperators[randomNumber(0, arrayLen)];
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
const game = () => {
  const items = generateData();
  const rightAnswer = calculateExpression(items);
  return { rightAnswer, items };
};

export default () => {
  brainGames(condition, game);
};
