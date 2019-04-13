import brainGames from '../index';
import { randomNumber } from '../utils';

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

const game = () => {
  const question = randomNumber(1, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return { rightAnswer, question };
};

export default () => {
  brainGames(gameDescription, game);
};
