import createGame from '../index';
import { generateRandomNumber } from '../utils';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameDescription = 'Answer "yes" if number is prime otherwise answer "no".';

const generateGameData = () => {
  const question = generateRandomNumber(1, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return { rightAnswer, question };
};

export default () => {
  createGame(gameDescription, generateGameData);
};
