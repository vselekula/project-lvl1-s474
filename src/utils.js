import { car, cdr, isPair } from 'hexlet-pairs';

export const generateRandomNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export const toString = (pair) => {
  if (isPair(pair)) {
    const left = toString(car(pair));
    const right = toString(cdr(pair));
    return `${left} ${right}`;
  }
  return String(pair);
};
